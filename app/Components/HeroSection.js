'use client'
// components/HeroSection.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css'; // Create a CSS file for styles
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // This effect can be used to track page views or any other analytics
    // You can add any additional optimization or tracking logic here
  }, []);

  return (
    <section className={styles.heroSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className={styles.title}>Optimize IT Systems</h1>
            <h2 className={styles.heading}>Creating a better</h2>
            <h2 className={styles.heading2}>IT Solutions</h2>
            <p className={styles.description}>
            Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
            </p>
            <Button variant="primary" href="/contact" style={{ fontSize: '1.25rem', padding: '10px 20px',borderRadius:'40px' }}>
              Start Now <span style={{ backgroundColor: 'white', borderRadius: '50%', padding: '5px', marginLeft: '10px',color:'black',fontWeight:'bold' }}>&#8594;</span>
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="/hero-banner.png" 
              alt="Hero Image"
              width={500}
              height={500}
              className={styles.heroImage}
              priority={true} // Optimize image loading
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
