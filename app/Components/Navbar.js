'use client'; // Ensures this is a Client Component

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"; // Heroicons v2
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Icons
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Custom CSS for primary/secondary colors
import { HiMenu } from 'react-icons/hi'; // Example using a different icon library

export default function CustomNavbar() {
  return (
    <header>
      {/* Topbar */}
      <div className={`py-3 ${styles.topbar} topbar`}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} xs={12} className="d-flex justify-content-md-start justify-content-center">
              <div className="me-4 d-flex align-items-center">
                <MapPinIcon className={`${styles.icon} me-2`} style={{ width: '16px', height: '16px' }} />
                <span style={{color:'white'}}>123 Street, City</span>
              </div>
              <div className="d-flex align-items-center">
                <EnvelopeIcon className={`${styles.icon} me-2`} style={{ width: '16px', height: '16px' }} />
                <span style={{color:'white'}}>email@example.com</span>
              </div>
            </Col>
            <Col md={6} xs={12} className="d-flex justify-content-md-end justify-content-center">
              <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} size={18} />
              </a>
              <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} size={18} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={60} 
              priority
            />
          </Navbar.Brand>

          {/* Custom Toggle Icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0">
            <HiMenu style={{ fontSize: '1.5rem', color: '#0d6efd' }} /> {/* Example custom icon */}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.menu}`} id="menu">
              <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
              <Nav.Link href="/about" className={styles.menuLink}>About</Nav.Link>
              <Nav.Link href="/services" className={styles.menuLink}>Services</Nav.Link>
              <Nav.Link href="/contact" className={styles.menuLink}>Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
                
              <FaPhoneAlt style={{color: 'var(--primary-color)', fontSize: '1.5rem'}} />
              <span className="mx-2" style={{color: 'var(--primary-color)'}}>(123) 456-7890</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
