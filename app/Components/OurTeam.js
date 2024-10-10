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

const teamMembers = [
  {
    id: 1,
    name: 'Rishit Dubey',
    role: 'CEO/Co-Founder',
    imageUrl: '/team1.jpg',
    socials: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 2,
    name: 'Shraddha Mishra',
    role: 'Project Manager',
    imageUrl: '/team2.jpg',
    socials: {
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
  },
  {
    id: 3,
    name: 'Suchita Dubey',
    role: 'Director',
    imageUrl: '/team3.jpg',
    socials: {
      facebook: 'https://facebook.com/emilywhite',
      twitter: 'https://twitter.com/emilywhite',
      linkedin: 'https://linkedin.com/in/emilywhite',
    },
  },
  {
    id: 4,
    name: 'Manuraj Dubey',
    role: 'Director',
    imageUrl: '/team3.jpg',
    socials: {
      facebook: 'https://facebook.com/emilywhite',
      twitter: 'https://twitter.com/emilywhite',
      linkedin: 'https://linkedin.com/in/emilywhite',
    },
  },
  {
    id: 5,
    name: 'Nilesh Solanki',
    role: 'CIO',
    imageUrl: '/team1.jpg',
    socials: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 6,
    name: 'Charisma Megayana',
    role: 'Head of Marketing',
    imageUrl: '/team2.jpg',
    socials: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
];

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
                  <div className={styles.iconContainer}>
                    <FaUser className={styles.userIcon} onClick={() => handleIconClick(index)} />
                    <div className={`${styles.socialIcons} ${activeMember === index ? styles.visible : ''}`}>
                      <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                        <FaFacebook style={{ color: '#3b5998', backgroundColor: 'white', borderRadius: '50%', padding: '5px' }} />
                      </a>
                      <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                        <FaTwitter style={{ color: '#1da1f2', backgroundColor: 'white', borderRadius: '50%', padding: '5px' }} />
                      </a>
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin style={{ color: '#0077b5', backgroundColor: 'white', borderRadius: '50%', padding: '5px' }} />
                      </a>
                    </div>
                  </div>
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
