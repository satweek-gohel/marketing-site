import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'; // Create a CSS module for styling
import Image from 'next/image';import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}>
        <Container>
          <Row className="py-5">
            {/* Column 1: Logo and Description */}
            <Col md={3} className="text-white">
              <Image className={styles.logo} src='/logo-light.png'
              height={50}
              width={150}
              >

              </Image>
              <p className='mt-3'>Your description goes here. Briefly describe your company and its mission.</p>
            </Col>

            {/* Column 2: Company Menu Items */}
            <Col md={3} className="text-white">
              <h5 className={styles.head}>Company</h5>
              <ul className="list-unstyled">
                <li className='my-3'><Link href="/about" className={`${styles.link} my-2`}>About Us</Link></li>
                <li className='my-3'><Link href="/services" className={`${styles.link} my-2`}>Meet Our Team</Link></li>
                <li className='my-3'><Link href="/blog" className={`${styles.link} my-2`}>News & Media</Link></li>
                <li className='my-3'><Link href="/contact"className={`${styles.link} my-2`}>Case Studies</Link></li>
                <li className='my-3'><Link href="/contact"className={`${styles.link} my-2`}>Contact Us</Link></li>
                <li className='my-3'><Link href="/contact" className={`${styles.link} my-2`}>Investors</Link></li>

              </ul>
            </Col>

            {/* Column 3: Solutions Menu Items */}
            <Col md={3} className="text-white">
              <h5 className={styles.head}>Solutions</h5>
              <ul className="list-unstyled">
                <li className='my-3'><Link href="/solution1" className={styles.link}>IT Management</Link></li>
                <li className='my-3'><Link href="/solution2" className={styles.link}>Cyber Security</Link></li>
                <li className='my-3'><Link href="/solution3" className={styles.link}>Cloud Computing</Link></li>
                <li className='my-3'><Link href="/solution3" className={styles.link}>IT Consulting</Link></li>
                <li className='my-3'><Link href="/solution3" className={styles.link}>Software Dev</Link></li>
                <li className='my-3'><Link href="/solution3" className={styles.link}>Backup & Recovery</Link></li>
              </ul>
            </Col>

            {/* Column 4: Contact Info */}
            <Col md={3} className="text-white">
              <h5 className={styles.head}>Contact Info</h5>
              <span style={{fontWeight:500, color:'white', fontSize:'1.2rem'}}>Address:</span>
              <p className={styles.subhead}> 123 Main St, City, Country</p>
              <span style={{fontWeight:500, color:'white', fontSize:'1.2rem'}}>Email: </span>
              <p className={styles.subhead}>contact@yourdomain.com</p>
              <h5 className={styles.head}>Download App</h5>
              <div className='d-flex' style={{gap:'20px',marginTop:'20px'}}>
                <Link href="/download" className={styles.link}><IoLogoGooglePlaystore color='white' size={25} className='me-2' />Play Store
                </Link>
                <br />
                <Link href="/download" className={styles.link}> <FaAppStoreIos color='white' size={25} className='me-2'/>App Store</Link>
              </div>
              
            </Col>
          </Row>

          <hr></hr>
          
          <div className='copyright d-flex justify-content-center' >
    <p>Copyright © 2020. Developed By @Shivinfotech</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
