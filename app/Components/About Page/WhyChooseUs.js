'use client'

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa'; // Importing phone icon from react-icons
import { AiOutlineBulb } from 'react-icons/ai'; // Importing smart solutions icon from react-icons
import styles from '../../styles/About Page/WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.overlay}>
        <Container className="text-center">
          {/* Title and Subtitle */}
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>
            We provide the best services that meet your expectations and beyond.
          </p>

          {/* Cards at the bottom of the image */}
          <div className={styles.cardWrapper}>
            <Row className="justify-content-center">
              {/* First Card: Customer Support */}
              <Col md={6} sm={12} className="mb-4">
                <Card className={styles.customCard}>
                  <Card.Body>
                    <Card.Title className={styles.chead} style={{fontSize:'1.5rem',fontWeight:'500'}}>24/7 Customer Support</Card.Title>
                    <Card.Text className={styles.cdes}>
                      Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.
                    </Card.Text>
                    <div className={styles.phoneContainer}>
                      <FaPhone className={styles.phoneIcon} />
                      <div className='d-flex flex-column align-items-center justify-content-center'>
                        <span>Helpline: </span>
                        <span>+1 (234) 567-890</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Second Card: Smart Solutions */}
              <Col md={6} sm={12} className="mb-4">
                <Card className={styles.customCard}>
                  <Card.Body>
                    <div className={styles.solutionContainer}>
                      <AiOutlineBulb className={styles.solutionIcon} />
                      <div className={styles.solutionText}>
                        <Card.Title className={styles.chead}>Smart Solutions</Card.Title>
                        <Card.Text className={styles.cdes}>
                          Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no.
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
