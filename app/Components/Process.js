// components/Process.js
'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../styles/Process.module.css';
import { MdOutlineSecurity } from 'react-icons/md'; // Play button icon
import { LuDatabaseBackup } from "react-icons/lu";
import { IoIosCloudUpload } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";

const Process = () => {
  return (
    <section className={styles.processSection}>
      <Container>
        {/* Heading and Subheading */}
        <div className="text-center mb-5">
          <h3 className={styles.heading}>FEATURED SERVICES</h3>
          <h2 className={styles.subheading}>Engaging Creative<bR></bR>
          minds via technology</h2>
          
        </div>

        {/* Process Cards */}
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
              <FaLaptopCode className={styles.icon1} />
                <Card.Title>IT Consultancy</Card.Title>
                <Card.Text>Astonished set expression solicitude way admiration</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
              <MdOutlineSecurity className={styles.icon2} />
                <Card.Title>Cloud Computing</Card.Title>
                <Card.Text>Astonished set expression solicitude way admiration</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
              <IoIosCloudUpload className={styles.icon3} />
                <Card.Title>Cyber Security</Card.Title>
                <Card.Text>Astonished set expression solicitude way admiration</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className={`${styles.processCard} ${styles.magicBorder}`}>
              <Card.Body className="text-center">
              <LuDatabaseBackup className={styles.icon4} />
                <Card.Title>Backup Recovery</Card.Title>
                <Card.Text>Astonished set expression solicitude way admiration.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;
