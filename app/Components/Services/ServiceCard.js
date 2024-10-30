'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../../styles/Services/ServiceCard.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getServiceList } from '@/app/api/comman';

const ServiceCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch services data
    const fetchServices = async () => {
      {
        const servicesData = await getServiceList();
        setServices(servicesData.data.data);
        }
      } 
  

    fetchServices();
  }, []);

  return (
    <section className={styles.serviceSection}>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={12} key={service.id} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className={styles.card}>
                <Card.Body className={styles.cardBody + " text-center"}>
                  <Card.Title className={styles.cardTitle}>{service.service_name}</Card.Title>
                  <div className={styles.numberLabel}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <Card.Text className={styles.cardDescription}>
                    {service.service_description || 'Description not available'}
                  </Card.Text>
                  <Link href={`/service-details/${service.serviceUrl}`} passHref>
                    <Button className={styles.readMore}>Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceCard;