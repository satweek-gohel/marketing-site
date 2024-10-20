import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Create a CSS module for styling
import Image from 'next/image';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <Container>
          <Row className="py-5 gy-4"> {/* Added gy-4 for proper spacing between rows on tablet devices */}
            {/* Column 1: Logo and Description */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Company</h5>
              <ul className="list-unstyled">
                <li className='my-3'><Link href="/services" className={`${styles.link} my-2`}>Services</Link></li>
                <li className='my-3'><Link href="/about" className={`${styles.link} my-2`}>About Us</Link></li>
                <li className='my-3'><Link href="/contact"className={`${styles.link} my-2`}>Contact Us</Link></li>
                
              </ul>
            </Col>

            {/* Column 2: Company Menu Items */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Products</h5>
              <ul className="list-unstyled">
                <li className='my-3'><Link href="/products/dynamics-365" className={`${styles.link} my-2`}>Dynamic 365</Link></li>
                <li className='my-3'><Link href="/products/microsoft-office-365" className={`${styles.link} my-2`}>Office 365</Link></li>
                <li className='my-3'><Link href="/products/microsoft-power-platform"className={`${styles.link} my-2`}>Power Platform</Link></li>
                <li className='my-3'><Link href="/products/microsoft-sustainability-manager"className={`${styles.link} my-2`}>Sustainability Manager</Link></li>
                
              </ul>
            </Col>

            {/* Column 3: Solutions Menu Items */}
            <Col md={6} lg={3} className="text-white text-left">
              <h5 className={styles.head}>Services</h5>
              <ul className="list-unstyled">
                <li className='my-3'><Link href="/service-details/ai-intelligent-solutions" className={styles.link}> AI Development & Consulting
                </Link></li>
                <li className='my-3'><Link href="#" className={styles.link}>Digital Literacy Training</Link></li>
                <li className='my-3'><Link href="#" className={styles.link}> Microsoft Technology</Link></li>
                <li className='my-3'><Link href="/service-details/consulting-service" className={styles.link}> IT Consultancy</Link></li>
                <li className='my-3'><Link href="#" className={styles.link}> Project Management</Link></li>
                <li className='my-3'><Link href="#" className={styles.link}>Smart Data Solutions</Link></li>
                <li className='my-3'><Link href="/service-details/software-development" className={styles.link}> Software Development</Link></li>
                <li className='my-3'><Link href="/service-details/web-development" className={styles.link}> Web Development</Link></li>
              </ul>
            </Col>

            {/* Column 4: Contact Info */}
            <Col md={6} lg={3} className="text-white d-flex flex-column align-items-start">
              <h5 className={styles.head}>Contact Info</h5>
              <span style={{fontWeight:500, color:'white', fontSize:'1rem'}}>Locations:</span>
              <p className={styles.subhead}> Australia |Indonesia|Mumbai|</p>
              <p className={styles.subhead}>Gujarat |Madhya Pradesh</p>
              <span style={{fontWeight:500, color:'white', fontSize:'1rem'}}>Email: </span>
              <p className={styles.subhead}>
  <a href="mailto:sales@cuentista.tech" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'inherit' }}>
    sales@cuentista.tech
  </a>
</p>
<span style={{fontWeight:500, color:'white', fontSize:'1rem'}}>Phone: </span>
              <p className={styles.subhead}>
  <a href="tel:9713900913" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'inherit' }}>
  +91 97139 00913
  </a>
</p>
              
            </Col>
          </Row>

          <hr></hr>
          
          <div className='copyright d-flex justify-content-center'  >
    <p className={styles.foot}>Copyright © 2024. Developed By @Shivinfotech</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
