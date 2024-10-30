'use client'

import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/About Page/ProcessComponent.module.css';
import { processSteps } from '../Constants/enums';


const ProcessComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={styles.processSection}>
      <Container>
        {/* Title and Subtitle */}
        <div className="text-center mb-5 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
          <h2 className={styles.title}>Our Commitment</h2>
          <p className={styles.subtitle}>How we work</p>
          <div className={styles.line}></div>
        </div>
        
        {/* Process Cards */}
        <Row>
          {processSteps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Card className={`${styles.processCard} h-100`}>
                <div className={styles.iconBox}>
                  <Image
                    src={step.imageUrl}
                    alt={step.title}
                    width={50}
                    height={50}
                  />
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <Card.Body>
                  <Card.Title className='font-weight-bold'>{step.title}</Card.Title>
                  <Card.Text>{step.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProcessComponent;
