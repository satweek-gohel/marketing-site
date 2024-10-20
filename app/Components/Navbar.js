'use client'; // Ensures this is a Client Component

import { Container, Navbar, Nav, Offcanvas, NavDropdown, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaClock, FaYoutube, FaEnvelope } from "react-icons/fa"; // Social Icons and Clock Icon
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'; // Custom CSS for primary/secondary colors
import { HiMenu } from 'react-icons/hi'; // Example using a different icon library
import { MdMenuOpen } from 'react-icons/md'; // Import MdMenuOpen
import { useState, useEffect } from 'react'; // To manage the sidebar state
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Importing useRouter

export default function CustomNavbar() {
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [currentPath, setCurrentPath] = useState(''); // To store the current path
  const router = useRouter(); // Use useRouter inside the component body

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(router.pathname); // Store the current path
    }
  }, [router.pathname]); 

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  return (
    <header style={{ zIndex: '999 !important' }}>
      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="border-bottom" style={{ zIndex: '999 !important' }}>
        <Container style={{ zIndex: '999 !important' }}>
          <Navbar.Brand href="/">
            <Image 
              src="/logo.jpeg" 
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

         

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.menu}`} id="menu">
              <Nav.Link 
                href="/" 
                className={`${styles.menuLink} ${currentPath === '/' ? styles.active : ''}`}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="/about" 
                className={`${styles.menuLink} ${currentPath === '/about' ? styles.active : ''}`}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="/services" 
                className={`${styles.menuLink} ${currentPath === '/services' ? styles.active : ''}`}
              >
                Services
              </Nav.Link>
             

              {/* Dropdown for Products */}
              
              <NavDropdown 
                title="Products" 
                id="productsDropdown" 
                className={styles.menuLink2}
                style={{ zIndex: '999 !important' }}
              >
                <NavDropdown.Item style={{ zIndex: '999 !important' }} as={Link} href="/products/dynamics-365">Dynamic 365</NavDropdown.Item>
                <NavDropdown.Item style={{ zIndex: '999 !important' }} as={Link} href="/products/microsoft-office-365">Office 365</NavDropdown.Item>
                <NavDropdown.Item style={{ zIndex: '999 !important' }} as={Link} href="/products/microsoft-power-platform">Power Platofrm</NavDropdown.Item>
                <NavDropdown.Item style={{ zIndex: '999 !important' }} as={Link} href="/products/microsoft-sustainability-manager">Sustainability Manager</NavDropdown.Item>
               
              </NavDropdown>
              
              <Nav.Link 
                href="/contact" 
                className={`${styles.menuLink} ${currentPath === '/contact' ? styles.active : ''}`}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          

          <Button variant="outline" onClick={handleSidebarShow}  className={styles.sidebarButton} >
        <MdMenuOpen color="var(--text-color)" size={25} />
      </Button>
        </Container>

        
      </Navbar>

     

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cuentista</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4 className={styles.stitle}>Contact Info</h4>
          <div className={styles.infobox}>
  <div className={styles.left}>
    <FaEnvelope className={styles.sicon} />
  </div>
  <div className={styles.right}>
    <h2 className={styles.sstitle}>EMAIL</h2>
    <p className={styles.ssdes}>
      <a href="mailto:sales@cuentista.tech" style={{ color: 'inherit', textDecoration: 'none' }}>
      sales@cuentista.tech
      </a>
    </p>
  </div>
</div>

<div className={styles.infobox}>
  <div className={styles.left}>
    <FaPhoneAlt className={styles.sicon} />
  </div>
  <div className={styles.right}>
    <h2 className={styles.sstitle}>PHONE</h2>
    <p className={styles.ssdes}>
      <a href="tel: +9197139 00913" style={{ color: 'inherit', textDecoration: 'none' }}>
      +91 97139 00913
      </a>
    </p>
  </div>
</div>

          <div className={styles.infobox}>
            <div className={styles.left}>
              <FaClock className={styles.sicon} />
            </div> 
            <div className={styles.right}>
              <h2 className={styles.sstitle}>OFFICE HOURS</h2>
              <p className={styles.ssdes}>Mon - Fri : 10:00 - 7:00</p>
            </div> 
          </div>

          <h4 className={styles.stitle} style={{ marginTop: '20px' }}>Additional Links</h4>
          <ul className={styles.menu2} style={{ padding: '0px', marginTop: '20px' }}>
            <li>
              <Link href="/about" className={styles.menuLink} style={{ marginLeft: '0px !important' }}>About</Link>
            </li>
            <li>
              <Link href="/services" className={styles.menuLink}>Services</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.menuLink}>Contact</Link>
            </li>
           
          </ul>

          <h4 className={styles.stitle} style={{ marginTop: '20px' }}>Connect With Us</h4>
          <div className="d-flex my-5 ">
            <Link href="#" passHref>
              <FaFacebook style={{ color: '#3b5998', marginRight: '25px', marginLeft: '20px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaTwitter style={{ color: '#1DA1F2', marginRight: '25px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaInstagram style={{ color: '#C13584', marginRight: '25px', fontSize: '2rem' }} />
            </Link>
            <Link href="#" passHref>
              <FaYoutube style={{ color: '#FF0000', marginRight: '10px', fontSize: '2rem' }} />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
