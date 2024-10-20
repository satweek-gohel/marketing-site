'use client';

import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // React Icons for address, email, phone
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/Contact/ContactUs.module.css';

export default function ContactUs() {
  const [activeKey, setActiveKey] = useState('address'); // State to manage active tab

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      {/* Contact Form & Tabs */}
      <Container className="my-5">
        <Row>
          {/* Left Column - Form */}
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <h2 className={styles.title}>Need Help ?</h2>
            <p className={styles.subtitle}>Talk to us about how to improve your customer service, optimise your resources and use technology to deliver innovative solutions. Helping clients all across the World.</p>
            <Form className="mt-3">
              <Form.Group className="mb-3" controlId="formFName">
                <Form.Label className={styles.formLabel}>First Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your first Name name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLName">
                <Form.Label className={styles.formLabel}>Last Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className={styles.formLabel}>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className={styles.formLabel}>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>

              <Button variant="outline-primary" type="submit" style={{fontWeight:'500'}}>
              Book a Consultation
              </Button>
            </Form>
          </Col>

          {/* Right Column - Tabs */}
          <Col lg={6} data-aos="fade-up">
            <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
              <Nav variant="tabs" className={styles.customTabs}>
                <Nav.Item>
                  <Nav.Link eventKey="address" className={activeKey === 'address' ? styles.activeTab : ''} style={{color:'var(--text-color)'}}>
                    Address
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="map" className={activeKey === 'map' ? styles.activeTab : ''} style={{color:'var(--text-color)'}}>
                    Google Maps
                  </Nav.Link>
                </Nav.Item> */}
              </Nav>

              <Tab.Content className="mt-4">
                {/* Address Tab Content */}
                <Tab.Pane eventKey="address">
                  <div className="d-flex align-items-center mb-5 mx-2 mt-5" data-aos="fade-up">
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Locations</h3>
                    <p className={styles.tabconsubtitle}>Australia | Indonesia| Mumbai| Gujarat | Madhya Pradesh</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5 mx-2" data-aos="fade-up" data-aos-delay="100">
                    <FaEnvelope className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Email:</h3>
                    <span className={styles.tabconsubtitle}><a href="mailto:sales@cuentista.tech" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'inherit' }}>
    sales@cuentista.tech
  </a></span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5 mx-2" data-aos="fade-up" data-aos-delay="200">
                    <FaPhoneAlt className={styles.icon} />
                    <div>
                    <h3 className={styles.tabcontitle}>Phone:</h3>
                    <span className={styles.tabconsubtitle}>+91 97139 00913</span>
                    </div>
                  </div>
                </Tab.Pane>

                {/* Google Maps Tab Content */}
                {/* <Tab.Pane eventKey="map" data-aos="fade-up">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9226397029446!2d-122.41941608468115!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c5f65b6e7%3A0xb0bffba4e0ec9e9f!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1630894610090!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="map"
                  ></iframe>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
