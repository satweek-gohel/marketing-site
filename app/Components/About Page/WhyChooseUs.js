'use client';

import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineBulb } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/About Page/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.overlay}>
        <Container className="text-center">
          <h2 className={styles.title} data-aos="fade-up">Why Choose Us</h2>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            We provide the best services that meet your expectations and beyond.
          </p>

          <div className={styles.cardWrapper}>
            <Row className="justify-content-center">
              <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-right">
                <Card className={styles.customCard}>
                  <Card.Body>
                    <Card.Title className={styles.chead}>24/7 Customer Support</Card.Title>
                    <Card.Text className={styles.cdes}>
                      Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw.
                    </Card.Text>
                    <div className={styles.phoneContainer}>
                      <FaPhone className={styles.phoneIcon} />
                      <div>
                        <span style={{ fontWeight: 600 }}>Helpline:</span>
                        <p className="my-2"> +1 (234) 567-890</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-left">
                <Card className={styles.customCard}>
                  <Card.Body>
                    <div className={styles.solutionContainer}>
                      <AiOutlineBulb className={styles.solutionIcon} />
                      <div>
                        <Card.Title className={styles.chead}>Smart Solutions:</Card.Title>
                        <Card.Text className={styles.cdes}>
                          Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw.
                        </Card.Text>
                      </div>
                    </div>
                    <div className={styles.startNow}>
                      <h5>Start Now</h5>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhyChooseUs;
