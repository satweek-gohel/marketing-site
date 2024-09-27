'use client'
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../../styles/Services/ServiceCard.module.css';
import Link from 'next/link'; // Next.js Link for better navigation
import { FaLaptopCode, FaChartLine, FaShieldAlt, FaBusinessTime, FaNetworkWired, FaFireAlt } from 'react-icons/fa'; // Importing react-icons

const ServiceCard = () => {
    const services = [
        {
          id: 1,
          title: 'IT Design',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaLaptopCode />,
          link: '/services/it-design',
        },
        {
          id: 2,
          title: 'Analytic Solutions',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaChartLine />,
          link: '/services/analytic-solutions',
        },
        {
          id: 3,
          title: 'Risk Management',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaShieldAlt />,
          link: '/services/risk-management',
        },
        {
          id: 4,
          title: 'Business Planning',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaBusinessTime />,
          link: '/services/business-planning',
        },
        {
          id: 5,
          title: 'Infrastructure Plan',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaNetworkWired />,
          link: '/services/infrastructure-plan',
        },
        {
          id: 6,
          title: 'Firewall Advance',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          icon: <FaFireAlt />,
          link: '/services/firewall-advance',
        },
      ];
      
  return (
    <section className={styles.serviceSection}>
      <Container>
        <Row>
          {services.map((service) => (
            <Col md={4} sm={12} key={service.id} className="mb-4">
              <Card className={styles.card}>
                <Card.Body className={styles.cardBody + " text-center"}>
                  <Card.Title className={styles.cardTitle}>{service.title}</Card.Title>
                  <div className={styles.icon}>{service.icon}</div>
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
