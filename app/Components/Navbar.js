'use client'; // Ensures this is a Client Component

import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaClock, FaYoutube } from "react-icons/fa"; // Social Icons
import { FaEnvelope } from "react-icons/fa"; // Importing email icon from react-icons
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Custom CSS for primary/secondary colors
import { HiMenu } from 'react-icons/hi'; // Example using a different icon library
import { useState } from 'react'; // To manage the sidebar state
import { MdMenuOpen } from "react-icons/md";
import Link from "next/link";

export default function CustomNavbar() {
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  return (
    <header>
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
              style={{ objectFit: 'contain' }}
            />
          </Navbar.Brand>

          {/* Custom Toggle Icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0">
            <HiMenu style={{ fontSize: '1.5rem', color: '#0d6efd' }} />
          </Navbar.Toggle>

          {/* Sidebar Toggle Button on Mobile/Tablet */}
          <Button variant="outline" className={`d-lg-none ${styles.sidebarToggle}`} onClick={handleSidebarShow}>
            <MdMenuOpen size={25} color="var(--text-color)" />
          </Button>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.menu}`} id="menu">
              <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
              <Nav.Link href="/about" className={styles.menuLink}>About</Nav.Link>
              <Nav.Link href="/services" className={styles.menuLink}>Services</Nav.Link>
              <Nav.Link href="/contact" className={styles.menuLink}>Contact</Nav.Link>
            </Nav>

            {/* Sidebar Toggle Button on Larger Screens */}
            <Button variant="outline" className="d-none d-lg-block" onClick={handleSidebarShow}>
              <MdMenuOpen size={25} color="var(--text-color)" />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tanda</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Sidebar Content */}
          <h4 className={styles.stitle}>Contact Info</h4>
          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaEnvelope className={styles.sicon} />
            </div> 
            <div className={styles.right}>
              <h2 className={styles.sstitle}>EMAIL</h2>
              <p className={styles.ssdes}>Info@gmail.com</p>
            </div> 
          </div>

          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaPhoneAlt className={styles.sicon} />
            </div> 
            <div className={styles.right}>
              <h2 className={styles.sstitle}>PHONE</h2>
              <p className={styles.ssdes}>+123 456 7890</p>
            </div> 
          </div>

          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaClock className={styles.sicon} />
            </div> 
            <div className={styles.right}>
              <h2 className={styles.sstitle}>OFFICE HOURS</h2>
              <p className={styles.ssdes}>Sat - Wed : 8:00 - 4:00</p>
            </div> 
          </div>

          <h4 className={styles.stitle} style={{ marginTop: '20px' }}>Additional Links</h4>
          <ul className={styles.menu2}>
            <li><Link href="/about" className={styles.menuLink}>About</Link></li>
            <li><Link href="/project" className={styles.menuLink}>Project</Link></li>
            <li><Link href="/login" className={styles.menuLink}>Login</Link></li>
            <li><Link href="/register" className={styles.menuLink}>Register</Link></li>
          </ul>

          <h4 className={styles.stitle} style={{ marginTop: '20px' }}>Connect With Us</h4>
          <div className="d-flex my-4">
            <Link href="https://www.facebook.com" passHref>
              <FaFacebook className={styles.socialIcon} />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FaTwitter className={styles.socialIcon} />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <FaInstagram className={styles.socialIcon} />
            </Link>
            <Link href="https://www.youtube.com" passHref>
              <FaYoutube className={styles.socialIcon} />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
