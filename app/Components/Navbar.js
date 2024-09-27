'use client'; // Ensures this is a Client Component

import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"; // Heroicons v2
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa"; // Social Icons
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Custom CSS for primary/secondary colors
import { HiMenu } from 'react-icons/hi'; // Example using a different icon library
import { useState } from 'react'; // To manage the sidebar state
import { MdMenuOpen } from "react-icons/md";

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
              style={{objectFit:'contain'}}
            />
          </Navbar.Brand>

          {/* Custom Toggle Icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0">
            <HiMenu style={{ fontSize: '1.5rem', color: '#0d6efd' }} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.menu}`} id="menu">
              <Nav.Link href="/" className={styles.menuLink}>Home</Nav.Link>
              <Nav.Link href="/about" className={styles.menuLink}>About</Nav.Link>
              <Nav.Link href="/services" className={styles.menuLink}>Services</Nav.Link>
              <Nav.Link href="/contact" className={styles.menuLink}>Contact</Nav.Link>
            </Nav>
           
            {/* Sidebar Toggle Button */}
            <Button variant="outline" onClick={handleSidebarShow}>
            <MdMenuOpen  color="var(--text-color)" size={25}/>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>Sidebar Content</h4>
          <p>Add your sidebar content here.</p>
          {/* Add more components or links here */}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
