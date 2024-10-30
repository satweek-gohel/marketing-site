'use client';

import { Container, Row, Col, Form, Button, Tab, Nav } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/Contact/ContactUs.module.css';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { send_mail } from "@/app/api/Contact";

export default function ContactUs() {
  const [activeKey, setActiveKey] = useState('address');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    phone_number: ''
  });
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Updated handleInputChange to directly use the field name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatPhoneNumber = (phoneValue) => {
    // Extract country code and number
    const countryCode = phoneValue.substring(0, 2);
    const number = phoneValue.substring(2);
    
    // Format as +XX-XXXXXXXXXX
    return `+${countryCode}-${number}`;
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setFormData(prev => ({
      ...prev,
      phone_number: formatPhoneNumber(value)
    }));
  };

  const submitInquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    console.log("Submitting form data:", formData); // Debug log

    try {
      const response = await send_mail(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your inquiry. We will get back to you soon!'
      });
      // Clear form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        phone_number: ''
      });
      setPhone('');
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
      console.error("Error sending mail:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <Container className="my-5">
        <Row>
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <h2 className={styles.title}>Need Help ?</h2>
            <p className={styles.subtitle}>Talk to us about how to improve your customer service, optimise your resources and use technology to deliver innovative solutions. Helping clients all across the World.</p>
            
            {submitStatus.message && (
              <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                {submitStatus.message}
              </div>
            )}

            <Form className="mt-3" onSubmit={submitInquiry}>
              <Form.Group className="mb-3">
                <Form.Label className={styles.formLabel}>First Name:</Form.Label>
                <Form.Control 
                  type="text" 
                  name="first_name"  // Changed from id to name
                  placeholder="Enter your first name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className={styles.formLabel}>Last Name:</Form.Label>
                <Form.Control 
                  type="text" 
                  name="last_name"  // Changed from id to name
                  placeholder="Enter your last name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className={styles.formLabel}>Phone:</Form.Label>
                <PhoneInput
                  country={"in"}
                  enableSearch={true}
                  value={phone}
                  placeholder="Enter the Phone Number"
                  autoFormat={true}
                  className="text-dark"
                  onChange={handlePhoneChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className={styles.formLabel}>Email address:</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"  // Changed from id to name
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className={styles.formLabel}>Message:</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="message"  // Changed from id to name
                  rows={3} 
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button 
                variant="outline-primary" 
                type="submit" 
                style={{fontWeight:'500'}}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book a Consultation'}
              </Button>
            </Form>
          </Col>

          <Col lg={6} data-aos="fade-up">
            <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
              <Nav variant="tabs" className={styles.customTabs}>
                <Nav.Item>
                  <Nav.Link eventKey="address" className={activeKey === 'address' ? styles.activeTab : ''} style={{color:'var(--text-color)'}}>
                    Address
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="mt-4">
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
                      <span className={styles.tabconsubtitle}>
                        <a href="mailto:sales@cuentista.tech" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'inherit' }}>
                          sales@cuentista.tech
                        </a>
                      </span>
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
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}