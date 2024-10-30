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
import { product_get } from '@/app/api/Product';
import { BENIFITS, CONTACT_US, EXPERTISE, METHODOLOGY, OVERVIEW, SERVICES } from '@/app/Components/Constants/Common';

// Helper function to extract numeric ID from slug
function extractIdFromSlug(slug) {
  const match = slug.match(/-(\d+)$/);
  return match ? match[1] : slug;
}

export default function ProductPage({ params }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const BASE_IMAGE_URL = 'https://cuentista-tech-be.onrender.com/uploads/';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = extractIdFromSlug(params.slug);
        const result = await product_get(productId); 
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, [params.slug]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!data || !data.data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const product = data.data;

  return (
    <>
      <div className={styles.banner} data-aos="fade-up">
        <h1>{product.product_name}</h1>
      </div>

      <Container>
        <Row>
          <Col md={8}>
            <h2 className={styles.heading} data-aos="fade-right">{OVERVIEW}:</h2>
            <p className={styles.description} data-aos="fade-left">
              {product.description || "Description not available"}
            </p>

            {product.productImages && product.productImages.length > 0 && (
              <div data-aos='fade-up'>
                <Image
                  src={`${BASE_IMAGE_URL}${product.productImages[0].product_image}`}
                  alt={product.product_name}
                  width={800}
                  height={400}
                  layout="responsive"
                  className={styles.image}
                  data-aos="fade-up"
                />
              </div>
            )}

            <h2 className={styles.heading} data-aos="fade-right">{BENIFITS}:</h2>
            <ul className={styles.features}>
              {product.productBenefit && product.productBenefit.map((benefit, index) => (
                <li key={index} className={styles.featureItem} data-aos="fade-up">
                  <FaCheck className={styles.checkIcon} /> {benefit.product_benefit}
                </li>
              ))}
              {(!product.productBenefit || product.productBenefit.length === 0) && (
                <li className={styles.featureItem}>No benefits listed</li>
              )}
            </ul>

            <h2 className={styles.heading} data-aos="fade-right">{SERVICES}:</h2>
            {product.productService && product.productService.map((service, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {service.product_service_type}</h3>
                <ul className={styles.features} data-aos="fade-up">
                  {service.productServiceDetails && service.productServiceDetails.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <FaCheck className={styles.checkIcon} />
                      {detail.product_service_detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {(!product.productService || product.productService.length === 0) && (
              <p className={styles.featureItem}>No services listed</p>
            )}

            {product.productImages && product.productImages.length > 0 && (
              <div data-aos='fade-up'>
                <Image
                  src={`${BASE_IMAGE_URL}${product.productImages[1].product_image}`}
                  alt={product.product_name}
                  width={800}
                  height={400}
                  layout="responsive"
                  className={styles.image}
                  data-aos="fade-up"
                />
              </div>
            )}

            <h2 className={styles.heading} data-aos="fade-right">{EXPERTISE}:</h2>
            {product.productExpertise && product.productExpertise.map((exp, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {exp.expertise_area}:</h3>
                <p>{exp.expertise_description || 'No description available'}</p>
              </div>
            ))}
            {(!product.productExpertise || product.productExpertise.length === 0) && (
              <p className={styles.featureItem}>No expertise listed</p>
            )}

            <h2 className={styles.heading} data-aos="fade-right">{METHODOLOGY}:</h2>
            {product.productMethodology && product.productMethodology.length > 0 ? (
              <ol className={styles.featureItem}>
                {product.productMethodology.map((step, index) => (
                  <li key={index} data-aos="fade-up">
                    <FaCheck className={styles.checkIcon} />
                    {step.methodology_description}
                  </li>
                ))}
              </ol>
            ) : (
              <p className={styles.featureItem}>No methodology listed</p>
            )}

            <h2 className={styles.heading} data-aos="fade-up">{CONTACT_US}:</h2>
            <p data-aos="fade-up" className={styles.description}>
              {product.contact_us || "Contact information not available"}
            </p>
          </Col>

          <Col md={4}>
            <div className={styles.menu} data-aos="fade-up">
              <ul>
                {['AI Development & Consulting', 'Digital Literacy Training', 'IT Consultancy', 'Microsoft Technology', 'Project Management', 'Smart Data Solutions', 'Software Development', 'Web Development'].map((item, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href={`/service-details/${item.toLowerCase().replace(/ /g, '-')}`}>
                      {item}
                    </Link>
                    <GoArrowUpRight className={styles.goicon} />
                  </li>
                ))}
              </ul>
            </div>

            {product.productImages && product.productImages.slice(2).map((image, index) => (
              <div key={index} className={styles.menu} data-aos="fade-up">
                <Image
                  src={`${BASE_IMAGE_URL}${image.product_image}`}
                  alt={`${product.product_name} - Image ${index + 2}`}
                  width={400}
                  height={300}
                  layout="responsive"
                  className={styles.image}
                  data-aos="fade-down"
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}