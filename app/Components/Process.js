// components/Process.js
'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../styles/Process.module.css';

// Import process icons (example icons)
import { FaChartLine, FaCogs, FaClipboardCheck, FaRocket } from 'react-icons/fa';

const Process = () => {
  return (
    <section className={styles.processSection}>
      <Container>
        {/* Heading and Subheading */}
        <div className="text-center mb-5">
          <h3 className={styles.heading}>Process</h3>
          <h2 className={styles.subheading}>How we Works</h2>
          
        </div>

        {/* Process Cards */}
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
                <FaChartLine className={styles.icon} />
                <Card.Title>Planning</Card.Title>
                <Card.Text>We start with comprehensive planning to ensure success.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
                <FaCogs className={styles.icon} />
                <Card.Title>Development</Card.Title>
                <Card.Text>Our expert team develops custom solutions tailored to your needs.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
                <FaClipboardCheck className={styles.icon} />
                <Card.Title>Testing</Card.Title>
                <Card.Text>Thorough testing ensures quality and functionality.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
                <FaRocket className={styles.icon} />
                <Card.Title>Launch</Card.Title>
                <Card.Text>We launch and monitor the project for optimal performance.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
