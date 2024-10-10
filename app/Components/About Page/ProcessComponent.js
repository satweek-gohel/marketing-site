'use client'

import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/About Page/ProcessComponent.module.css';

const ProcessComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const processSteps = [
    { number: '01', title: 'Our impact', description: 'We enable our clients and society to move confidently into the digital future by embracing sustainability, diversity, equity and inclusion. We want to lead by example and continue improving performance to be certain of reaching our net-zero goals.', imageUrl: '/counting.png' },
    { number: '02', title: 'Our values', description: 'We strive to deliver outstanding outcomes as our clients’ trusted partner. Our excellence in innovation means we’re always thinking ahead, solving problems and helping our clients to transform their business for future success.', imageUrl: '/video-call.png' },
    { number: '03', title: 'Sustainability', description: 'We are on a mission to create technology for good. As part of that mission, we recognize the importance of embedding sustainability into the fabric of our company, while continuing to use technology to create a more affluent and harmonious society. ', imageUrl: '/strategy.png' },
    { number: '04', title: 'Diversity, Equity & Inclusion', description: 'It is our belief that an inclusive culture uplifts and empowers individuals, helping to inspire innovation and creativity to its maximum. We place great importance on values of trust and safety.', imageUrl: '/support.png' },
  ];

  return (
    <section className={styles.processSection}>
      <Container>
        {/* Title and Subtitle */}
        <div className="text-center mb-5 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
          <h2 className={styles.title}>Process</h2>
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
                  <Card.Title style={{fontWeight:'500'}}>{step.title}</Card.Title>
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
