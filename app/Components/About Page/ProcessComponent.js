'use client'

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTools, FaHandshake, FaRegClipboard, FaRocket } from 'react-icons/fa'; // Importing icons
import styles from '../../styles/About Page/ProcessComponent.module.css';

const ProcessComponent = () => {
  const processSteps = [
    { number: '01', title: 'Choose a Service', description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.', icon: <FaTools size={50} /> },
    { number: '02', title: 'Request a Meeting', description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.', icon: <FaHandshake size={50} /> },
    { number: '03', title: 'Receive Custom Plan', description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.', icon: <FaRegClipboard size={50} /> },
    { number: '04', title: 'Let’s Make it Happen', description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.', icon: <FaRocket size={50} /> },
  ];

  return (
    <section className={styles.processSection}>
      <Container>
        {/* Title and Subtitle */}
        <div className="text-center mb-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className={styles.title}>Process</h2>
          <p className={styles.subtitle}>How we work</p>
          <div className={styles.line}></div>

        </div>
        
        {/* Process Cards */}
        <Row>
          {processSteps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className={`${styles.processCard} h-100`}>
                <div className={styles.iconBox}>
                  {step.icon}
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
