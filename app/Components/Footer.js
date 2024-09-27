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
            <Col md={6} lg={3} className="text-white p-5" style={{border:'2px solid white'}}>
              <Image className={styles.logo} src='/logo-light.png'
              height={50}
              width={150}
              >
              </Image>
              <p className='mt-3'>
              Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.
              </p>
              <div className="mt-4">
                <div className="input-group ">
                  <input type="email" placeholder="Enter your email" className="form-control" />
                  <button className="btn btn-primary" style={{backgroundColor:'white', border:'none'}}>
                    <IoMdSend size={20} color='var(--primary-color)' />
                  </button>
                </div>
              </div>
            </Col>

            {/* Column 2: Company Menu Items */}
            <Col md={6} lg={3} className="text-white text-center">
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
            <Col md={6} lg={3} className="text-white text-center">
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
            <Col md={6} lg={3} className="text-white d-flex flex-column align-items-center">
              <h5 className={styles.head}>Contact Info</h5>
              <span style={{fontWeight:500, color:'white', fontSize:'1rem'}}>Address:</span>
              <p className={styles.subhead}> 123 Main St, City, Country</p>
              <span style={{fontWeight:500, color:'white', fontSize:'1rem'}}>Email: </span>
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
          
          <div className='copyright d-flex justify-content-center'  >
    <p className={styles.foot}>Copyright © 2020. Developed By @Shivinfotech</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
