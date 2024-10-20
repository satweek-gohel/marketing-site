'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../../styles/Services/ServiceCard.module.css';
import Link from 'next/link'; // Next.js Link for better navigation
import Image from 'next/image'; // Importing Image from next/image
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const services = [
        {
          id: 1,
          title: 'AI Development & Consulting',
          description: 'Leverage our expertise to develop and integrate cutting-edge AI solutions tailored to your business needs.',
          imageUrl: '/development.png',
          link: '/service-details/ai-intelligent-solutions',
        },
        {
          id: 2,
          title: 'Digital Literacy Training',
          description: 'Boost your team’s digital skills through our comprehensive digital literacy training programs',
          imageUrl: '/analysis.png',
          link: '#',
        },
        {
          id: 3,
          title: 'IT Consultancy',
          description: 'Our expert IT consultants provide strategic advice and solutions to streamline your IT infrastructure and operations.',
          imageUrl: '/money-loss.png',
          link: '/service-details/consulting-service',
        },
        {
          id: 4,
          title: 'Project Management',
          description: 'Our team will help you streamline project management, ensuring your projects are delivered on time and within budget.',
          imageUrl: '/meeting.png',
          link: '#',
        },
        {
          id: 5,
          title: 'Microsoft Technology',
          description: '"We offer comprehensive Microsoft technology services, helping you maximize the potential of Microsoft tools for your business.',
          imageUrl: '/sketch.png',
          link: '#',
        },
        {
          id: 6,
          title: 'Smart Data Solutions',
          description: 'Our experts will transform your data into actionable insights, driving smarter business decisions.',
          imageUrl: '/firewall.png',
          link: '#',
        },
        {
          id: 7,
          title: 'Software Development',
          description: 'We develop custom software solutions that meet your business’s unique needs, from concept to deployment.',
          imageUrl: '/meeting.png',
          link: '/service-details/software-development',
        },
        {
          id: 8,
          title: 'Web Development',
          description: 'Our web development experts will help you build feature-rich, responsive websites tailored to your business needs.',
          imageUrl: '/sketch.png',
          link: '/service-details/web-development',
        },
      ];
      
  return (
    <section className={styles.serviceSection}>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col md={4} sm={12} key={service.id} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className={styles.card}>
                <Card.Body className={styles.cardBody + " text-center"}>
                  <Card.Title className={styles.cardTitle}>{service.title}</Card.Title>
                  <div className={styles.icon}>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <Card.Text className={styles.cardDescription}>{service.description}</Card.Text>
                  <Link href={service.link} passHref>
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
