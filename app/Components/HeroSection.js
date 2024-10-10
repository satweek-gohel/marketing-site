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
    <section className={styles.heroSection} style={{zIndex:1}}>
      <Container>
        <Row className="align-items-center" style={{zIndex:1}}>
          <Col md={6}  className="text-md-start text-center" data-aos="fade-right" style={{zIndex:1}}>
            {/* <h1 className={styles.title}>Optimize IT Systems</h1> */}
            <h2 className={styles.heading}>Flexible Solution For</h2>
            <h2 className={styles.heading2}>Your Bussiness Needs</h2>
            <p className={styles.description}>
            Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
            </p>
            <Button variant="primary" href="/contact" style={{ fontSize: '1.25rem', padding: '10px 20px',borderRadius:'10px', fontWeight:'400' }}>
              Contact Us 
            </Button>
          </Col>
          <Col md={6} className="text-center" data-aos="fade-left" style={{zIndex:1}}>
            <Image
              src="/hero-banner.png" 
              alt="Hero Image"
              width={500}
              height={500}
              className={styles.heroImage}
              priority={true} // Optimize image loading
              style={{ zIndex: 1 }} // Reduced z-index of the image
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
