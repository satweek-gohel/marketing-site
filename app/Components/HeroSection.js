'use client'
// components/HeroSection.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/HeroSection.module.css'; // Create a CSS file for styles
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section className={styles.heroSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}  className="text-md-start text-center" data-aos="fade-right">
            <h1 className={styles.title}>Optimize IT Systems</h1>
            <h2 className={styles.heading}>Creating a better</h2>
            <h2 className={styles.heading2}>IT Solutions</h2>
            <p className={styles.description}>
            Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
            </p>
            <Button variant="primary" href="/contact" style={{ fontSize: '1.25rem', padding: '10px 20px',borderRadius:'10px', fontWeight:'400' }}>
              Start Now 
            </Button>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left">
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
