// components/Process.js
'use client';
import { Container, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import styles from '../styles/Process.module.css';
import { MdOutlineSecurity } from 'react-icons/md';
import { LuDatabaseBackup } from "react-icons/lu";
import { IoIosCloudUpload } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 200,
    });
  }, []);

  // Data array to define services
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode className={styles.icon1} />,
      title: "AI Development & Consulting",
      description: "Leverage our expertise to develop and integrate cutting-edge AI solutions tailored to your business needs.",
    },
    {
      id: 2,
      icon: <MdOutlineSecurity className={styles.icon2} />,
      title: "Digital Literacy Training",
      description: "Boost your team’s digital skills through our comprehensive digital literacy training programs.",
    },
    {
      id: 3,
      icon: <IoIosCloudUpload className={styles.icon3} />,
      title: "IT Consultancy",
      description: "Our expert IT consultants provide strategic advice and solutions to streamline your IT infrastructure and operations.",
    },
    {
      id: 4,
      icon: <LuDatabaseBackup className={styles.icon4} />,
      title: "Project Management",
      description: "Our team will help you streamline project management, ensuring your projects are delivered on time and within budget.",
    },
    {
      id: 5,
      icon: <FaLaptopCode className={styles.icon1} />,
      title: "Microsoft Technology",
      description: "We offer comprehensive Microsoft technology services, helping you maximize the potential of Microsoft tools for your business.",
    },
    {
      id: 6,
      icon: <MdOutlineSecurity className={styles.icon2} />,
      title: "Smart Data Solutions",
      description: "Our experts will transform your data into actionable insights, driving smarter business decisions.",
    },
    {
      id: 7,
      icon: <IoIosCloudUpload className={styles.icon3} />,
      title: "Software Development",
      description: "We develop custom software solutions that meet your business’s unique needs, from concept to deployment.",
    },
    {
      id: 8,
      icon: <LuDatabaseBackup className={styles.icon4} />,
      title: "Web Development",
      description: "Our web development experts will help you build feature-rich, responsive websites tailored to your business needs.",
    },
    {
      id: 9,
      icon: <IoIosCloudUpload className={styles.icon3} />,
      title: "Training & Digital Literacy",
      description: "We provide tailored training programs to upskill your workforce in various digital tools and platforms.",
    }
  ];

  // Slick settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet or small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.processSection}>
      <Container>
        {/* Heading and Subheading */}
        <div className={styles.headingContainer} data-aos="fade-up">
          <h2 className={styles.heading}>FEATURED SERVICES</h2>
          <p className={styles.subHeading}>Service We Provide</p>
          <div className={styles.line}></div>
        </div>

        {/* Carousel with Slick Slider */}
        <Slider {...settings} className={styles.slickSlider}>
          {services.map((service) => (
            <div key={service.id} className="px-2" data-aos="fade-up" data-aos-delay="100">
              <Card className={`${styles.processCard} ${styles.magicBorder}`}>
                <Card.Body className="text-center">
                  {service.icon}
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Process;
