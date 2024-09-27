'use client'
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../../styles/Services/ServiceCard.module.css';
import Link from 'next/link'; // Next.js Link for better navigation
import Image from 'next/image'; // Importing Image from next/image

const ServiceCard = () => {
    const services = [
        {
          id: 1,
          title: 'IT Design',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/development.png',
          link: '/development.png',
        },
        {
          id: 2,
          title: 'Analytic Solutions',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/analysis.png',
          link: '/services/analytic-solutions',
        },
        {
          id: 3,
          title: 'Risk Management',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/money-loss.png',
          link: '/money-loss.png',
        },
        {
          id: 4,
          title: 'Business Planning',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/meeting.png',
          link: '/meeting.png',
        },
        {
          id: 5,
          title: 'Infrastructure Plan',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/sketch.png',
          link: '/services/infrastructure-plan',
        },
        {
          id: 6,
          title: 'Firewall Advance',
          description: 'Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.',
          imageUrl: '/firewall.png',
          link: '/firewall.png',
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
