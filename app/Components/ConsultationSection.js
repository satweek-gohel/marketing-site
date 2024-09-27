// components/ConsultationSection.js
'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaThumbsUp, FaGlobeAmericas } from 'react-icons/fa'; // Importing icons
import styles from '../styles/ConsultationSection.module.css'; // Import your CSS file
import Image from 'next/image'; // Use Next.js Image component
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section className={styles.consultationSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="text-md-start text-center" data-aos="fade-right">
            <h2 className={styles.heading1}>― Works About</h2>
            <h2 className={styles.heading2}>Trusted by 5,000+<br></br>
            Happy Customers</h2>
            <p className={styles.description}>
            Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case.
            </p>
            <div className={styles.pointContainer}>
              <div className={styles.point}>
                <FaThumbsUp className={styles.icon} />
                <span className={styles.pointText}>100% Client Satisfaction</span>
              </div>
              <div className={styles.point}>
                <FaGlobeAmericas className={styles.icon} />
                <span className={styles.pointText}>World Class Workers</span>
              </div>
            </div>
            <Button className={styles.consultButton}>Get a Consultation</Button>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-center" data-aos="fade-left">
            <div className={styles.imageContainer}>
              <Image 
                src="/consultation.jpg" // Replace with your image path
                alt="Consultation Image" 
                layout="responsive" 
                width={500} 
                height={400} 
              />
              <div className={styles.projectCount} data-aos="fade-up" data-aos-delay="200">
                <span style={{fontSize:'3rem !important'}}>500+</span>  <br></br>Projects Completed
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConsultationSection;
