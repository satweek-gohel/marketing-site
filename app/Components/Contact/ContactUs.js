'use client';

import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React Icons for address, email, phone
import { useState } from "react";
import styles from '../../styles/Contact/ContactUs.module.css';

export default function ContactUs() {
  const [activeKey, setActiveKey] = useState('address'); // State to manage active tab

  return (
    <section>
      

      {/* Contact Form & Tabs */}
      <Container className="my-5">
        <Row>
          {/* Left Column - Form */}
          <Col lg={6} className="mb-4">
          
            <h2 className={styles.title}>Need Help ?</h2>
          
            <p className={styles.subtitle}>Reach out to the world’s most reliable IT services.</p>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="outline-primary" type="submit" style={{fontWeight:'500'}}>
              Book a Consultation
              </Button>
            </Form>

          </Col>

          {/* Right Column - Tabs */}
          <Col lg={6}>
            <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
              <Nav variant="tabs" className={styles.customTabs}>
                <Nav.Item>
                  <Nav.Link eventKey="address" className={activeKey === 'address' ? styles.activeTab : ''} style={{color:'var(--text-color)'}}>
                    Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="map" className={activeKey === 'map' ? styles.activeTab : ''} style={{color:'var(--text-color)'}}>
                    Google Maps
                  </Nav.Link>
                </Nav.Item>
              </Nav>

             

              <Tab.Content className="mt-4">
                {/* Address Tab Content */}
                <Tab.Pane eventKey="address">
                  <div className="d-flex align-items-center mb-5 mx-2 mt-5">
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Address:</h3>
                    <p className={styles.tabconsubtitle}>123 Main St, City, Country</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5 mx-2">
                    <FaEnvelope className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Email:</h3>
                    <span className={styles.tabconsubtitle}>contact@company.com</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5 mx-2">
                    <FaPhoneAlt className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Phone:</h3>
                    <span className={styles.tabconsubtitle}>+1 234 567 890</span>
                    </div>
                  </div>
                </Tab.Pane>

                {/* Google Maps Tab Content */}
                <Tab.Pane eventKey="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9226397029446!2d-122.41941608468115!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c5f65b6e7%3A0xb0bffba4e0ec9e9f!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1630894610090!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                  ></iframe>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
