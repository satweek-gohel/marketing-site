'use client'; // Ensures this is a Client Component

// components/About.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import { FaCode, FaProjectDiagram, FaTools } from 'react-icons/fa'; // Example icons
import styles from '../styles/About.module.css'; // Create a CSS file for styles
import { TbCertificate } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section className={styles.aboutSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="position-relative" data-aos="fade-right">
            <Image
              src="/about1.jpg" // Replace with your image path
              alt="About Left Image"
              layout="responsive"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className={styles.leftImage}
            />
            {/* Overlay Card */}
            <Card className={`${styles.overlayCard} position-absolute`} data-aos="fade-up" data-aos-delay="200">
              <Card.Body>
                <Card.Title>20 years of experience</Card.Title>
              </Card.Body>
            </Card>
            {/* Hidden Image for mobile and tablet */}
            <Image
              src="/about2.jpg" // Replace with your image path
              alt="About Hidden Image"
              layout="responsive"
              width={600}
              height={400}
              className={styles.hiddenImage}
              data-aos="fade-left"
              data-aos-delay="400"
            />
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-md-start text-center" data-aos="fade-left">
            <h2 className={styles.heading2}>We Help IT Companies Scale Engineering Capacity</h2>
            <p className={styles.description2}>
              Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose.
            </p>

            {/* Vertical Icon List */}
            <div className={styles.iconList}>
              <div className={styles.iconItem} data-aos="fade-up" data-aos-delay="100">
              <Image
                  src="/diploma.png" 
                  alt="award"
                  width={50} // Adjusted width for icon
                  height={50} // Adjusted height for icon
                  className={styles.icon} // Add class for styling if needed
                />
                <div className={styles.textContainer}>
                  <h4 className={styles.heading}>Certified Company</h4>
                  <p className={styles.description}>Assurance yet bed was improving furniture man. Distrusts delighted she listening.</p>
                </div>
              </div>
              <div className={styles.iconItem} data-aos="fade-up" data-aos-delay="200">
               
                <Image
                  src="/award.png" 
                  alt="award"
                  width={50} // Adjusted width for icon
                  height={50} // Adjusted height for icon
                  className={styles.icon} // Add class for styling if needed
                />
                <div className={styles.textContainer}>
                  <h4 className={styles.heading}>Award Ceremony</h4>
                  <p className={styles.description}>Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive.</p>
                </div>
              </div>
              <div className={styles.iconItem} data-aos="fade-up" data-aos-delay="300">
                <Image
                  src="/sign.png" 
                  alt="Founders Sign"
                  width={50} // Adjusted width for icon
                  height={50} // Adjusted height for icon
                  className={styles.icon} // Add class for styling if needed
                />
                <div className={styles.textContainer}>
                  <h4 className={styles.heading}>Spark Moun</h4>
                  <p className={styles.description}>Chairman & Founder Techa</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
