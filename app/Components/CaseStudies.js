'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import styles from '../styles/CaseStudies.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Carousel images
const carouselImages = [
  {id:1, src: '/cs1.jpg', title: 'IT Consultancy', description: '- Technology' },
  {id:2, src: '/cs2.jpg', title: 'Analysis Of Security', description: '- Technology' },
  {id:3, src: '/cs3.jpg', title: 'Social Media App', description: '- Technology' },
  {id:4, src: '/cs4.jpg', title: 'Cyber Security', description: '- Technology' },
];

const statsData = [
  { id:1,label: "Happy Clients", value: 687 },
  { id:2,label: "Finished Projects", value: 2348 },
  { id:3,label: "Skilled Experts", value: 450 },
  { id:4,label: "Media Posts", value: 1200 }
];

const CaseStudies = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });

    // Animate counters from 0 to target value
    statsData.forEach((item, index) => {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < item.value) {
            newCounters[index] += Math.ceil(item.value / 100);
          } else {
            clearInterval(interval);
            newCounters[index] = item.value;
          }
          return newCounters;
        });
      }, 50);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.caseStudiesSection}>
      <Container>
        <Row>
          <Col>
            <div className={styles.headingContainer} data-aos="fade-up">
              <h3 className={styles.heading}>CASE STUDIES</h3>
              <h2 className={styles.subheading}>Our Work Showcase</h2>
              <div className={styles.line}></div>
            </div>
          </Col>
        </Row>

        {/* Carousel */}
        <Row>
          <Col>
            <Slider {...settings} className={styles.carousel}>
              {carouselImages.map((img, index) => (
                <div key={img.id} className={styles.imageWrapper} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <img src={img.src} alt={img.title} className={styles.carouselImage} />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3>{img.title}</h3>
                      <p>{img.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className={styles.statsRow}>
          {statsData.map((stat, index) => (
            <Col xs={6} md={3} key={stat.id} className={styles.statsCol} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h3 className={styles.statValue}>{counters[index]}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudies;
