'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/products/product.module.css';
import { FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { service_get } from '@/app/api/Services';

function extractIdFromSlug(slug) {
  const match = slug.match(/-(\d+)$/);
  return match ? match[1] : slug;
}

export default function ServicePage({ params }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const BASE_IMAGE_URL = 'https://cuentista-tech-be.onrender.com/uploads/';

  useEffect(() => {
    const fetchService = async () => {
      try {
        const serviceId = extractIdFromSlug(params.slug);
        const result = await service_get(serviceId);
        
        // Transform the API data to match the desired structure
        const transformedData = {
          title: result.data.data.service_name,
          description: result.data.data.service_description,
          images: result.data.data.serviceImages ? [
            `${BASE_IMAGE_URL}${result.data.data.serviceImages[0]?.overview_image}`,
            `${BASE_IMAGE_URL}${result.data.data.serviceImages[0]?.overview_image}`,
            `${BASE_IMAGE_URL}${result.data.data.serviceImages[0]?.right_sidebar_image_1}`,
            `${BASE_IMAGE_URL}${result.data.data.serviceImages[0]?.right_sidebar_image_2}`
          ] : [],
          services: result.data.data.subService ? result.data.data.subService.map(sub => ({
            title: sub.sub_service_title,
            description: sub.sub_service_description
          })) : [],
          approach: {
            title: 'Our Approach',
            points: result.data.data.Approach?.map(a => a.services_details_point) || []
          },
          consulting_expertise: {
            title: 'Consulting Services',
            description: '',
            points: result.data.data.Consulting?.map(c => c.services_details_point) || []
          },
          values: {
            title: 'Advanced Technology Capabilities',
            points: result.data.data.ATC?.map(a => a.services_details_point) || []
          },
          benefits: {
            title: 'Benefits',
            points: result.data.data.Benefit?.map(b => b.services_details_point) || []
          }
        };
        
        setData(transformedData);
      } catch (error) {
        console.error('Error fetching service:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Service not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.banner} >
        <h1>{data.title}</h1>
       
      </div>

      <Container>
        <Row>
          <Col md={8}>
            {data.images[0] && (
              <div>
                <Image
                  src={data.images[0]}
                  alt={data.title}
                  width={800}
                  height={400}
                  layout="responsive"
                  className={styles.image}
                />
              </div>
            )}

            <h2 className={styles.heading} >Overview:</h2>
            <p className={styles.description} >
              {data.description}
            </p>

            {data.services.length > 0 && (
              <>
                <h2 className={styles.heading}>Services:</h2>
                {data.services.map((service, index) => (
                  <div key={index} className={styles.featureItem}>
                    <h3 className={styles.type}>{index + 1}. {service.title}:</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </>
            )}

            {data.approach.points.length > 0 && (
              <>
                <h2 className={styles.heading} >{data.approach.title}</h2>
                <ul className={styles.features}>
                  {data.approach.points.map((point, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaCheck className={styles.checkIcon} /> {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {data.images[1] && (
              <div>
                <Image
                  src={data.images[1]}
                  alt={data.title}
                  width={800}
                  height={400}
                  layout="responsive"
                  className={styles.image}
                />
              </div>
            )}

            {data.consulting_expertise.points.length > 0 && (
              <>
                <h2 className={styles.heading}>{data.consulting_expertise.title}</h2>
                {data.consulting_expertise.description && (
                  <p className={styles.description}>
                    {data.consulting_expertise.description}
                  </p>
                )}
                <ul className={styles.features}>
                  {data.consulting_expertise.points.map((point, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FaCheck className={styles.checkIcon} /> {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {data.values.points.length > 0 && (
              <>
                <h2 className={styles.heading} >{data.values.title}</h2>
                <ul className={styles.features}>
                  {data.values.points.map((point, index) => (
                    <li key={index} className={styles.featureItem} >
                      <FaCheck className={styles.checkIcon} /> {point}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {data.benefits.points.length > 0 && (
              <>
                <h2 className={styles.heading}>{data.benefits.title}</h2>
                <ul className={styles.features}>
                  {data.benefits.points.map((point, index) => (
                    <li key={index} className={styles.featureItem} >
                      <FaCheck className={styles.checkIcon} /> {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Col>

          <Col md={4}>
            <div className={styles.menu} >
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/dynamics-365">Dynamic 365</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-office-365">Office 365</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-power-platform">Power Platform</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-sustainability-manager">Sustainability Manager</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
              </ul>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/service-details/ai-intelligent-solutions">AI Development & Consulting</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="#">Digital Literacy Training</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                {/* Add other service links similarly */}
              </ul>
            </div>

            {data.images[2] && (
              <div className={styles.menu} >
                <Image
                  src={data.images[2]}
                  alt={data.title}
                  width={400}
                  height={300}
                  layout="responsive"
                  className={styles.image}
                />
              </div>
            )}

            {data.images[3] && (
              <div className={styles.menu}>
                <Image
                  src={data.images[3]}
                  alt={data.title}
                  width={400}
                  height={300}
                  layout="responsive"
                  className={styles.image}
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}