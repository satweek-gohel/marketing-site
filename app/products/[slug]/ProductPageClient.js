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
import { dynamicsServices } from '../../Components/Constants/dynamicsServices';

function ProductPageClient({ data }) {
  useEffect(() => {
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, []);

  if (!data) {
    return null; // or you could return a custom 404 page
  }

  return (
    <>
      <div className={styles.banner} data-aos="fade-up">
        <h1>{data.title}</h1>
      </div>

      <Container>
        <Row>
          <Col md={8}>
            <h2 className={styles.heading} data-aos="fade-right">Overview:</h2>
            <p className={styles.description} data-aos="fade-left">{data.description}</p>

            <div data-aos='fade-up'>
              <Image
                src={data.images[0]}
                alt={data.title}
                width={800}
                height={400}
                layout="responsive"
                className={styles.image}
                data-aos="fade-up"
              />
            </div>

            <h2 className={styles.heading} data-aos="fade-right">Benefits:</h2>
            <ul className={styles.features}>
              {data.benefits.map((benefit, index) => (
                <li key={index} className={styles.featureItem} data-aos="fade-up">
                  <FaCheck className={styles.checkIcon} /> {benefit}
                </li>
              ))}
            </ul>

            <h2 className={styles.heading} data-aos="fade-right">Services:</h2>
            {data.services.map((service, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {service.type}:</h3>
                <ul className={styles.features} data-aos="fade-up">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <FaCheck className={styles.checkIcon} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div data-aos='fade-up'>
              <Image
                src={data.images[1]}
                alt={data.title}
                width={800}
                height={400}
                layout="responsive"
                className={styles.image}
                data-aos="fade-up"
              />
            </div>

            <h2 className={styles.heading} data-aos="fade-right">Expertise:</h2>
            {data.expertise.map((exp, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index + 1}. {exp.area}:</h3>
                <p>{exp.description}</p>
              </div>
            ))}

            <h2 className={styles.heading} data-aos="fade-right">Methodology:</h2>
            <ol className={styles.featureItem}>
              {data.methodology.steps.map((step, index) => (
                <li key={index} data-aos="fade-up">
                  <FaCheck className={styles.checkIcon} />
                  {step}
                </li>
              ))}
            </ol>

            <h2 className={styles.heading} data-aos="fade-up">Contact Us:</h2>
            <p data-aos="fade-up" className={styles.description}>{data.contact}</p>
          </Col>

          <Col md={4}>
            <div className={styles.menu} data-aos="fade-up">
              <ul>
                {dynamicsServices.map((service, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href={`/products/${service.id}`}>
                      {service.title}
                    </Link>
                    <GoArrowUpRight className={styles.goicon} />
                  </li>
                ))}
              </ul>
            </div>

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

            {[2, 3].map((imageIndex) => (
              <div key={imageIndex} className={styles.menu} data-aos="fade-up">
                <Image
                  src={data.images[imageIndex]}
                  alt={data.title}
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

export default ProductPageClient;