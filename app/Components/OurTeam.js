'use client';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaUser } from 'react-icons/fa';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/OurTeam.module.css';
import { teamMembers } from './Constants/enums';


const OurTeam = () => {
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const handleIconClick = (index) => {
    setActiveMember(index === activeMember ? null : index);
  };

  // Slick carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 members at a time
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,        // Time between slides (in milliseconds)
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.headingContainer} data-aos="fade-up">
          <h2 className={styles.heading}>EXPERT TEAM</h2>
          <p className={styles.subHeading}>Meet Our Leadership</p>
          <div className={styles.line}></div>
        </div>

        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={member.id} className={styles.teamMemberCol}>
              <div className={styles.teamMember} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className={styles.imageWrapper}>
                  <img src={member.imageUrl} alt={member.name} className={styles.teamImage} />
                 
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default OurTeam;
