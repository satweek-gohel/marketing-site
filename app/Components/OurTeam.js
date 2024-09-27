'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaUser } from 'react-icons/fa';
import styles from '../styles/OurTeam.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Lead Developer',
    imageUrl: '/team1.jpg',
    socials: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
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
    name: 'Emily White',
    role: 'UI/UX Designer',
    imageUrl: '/team3.jpg',
    socials: {
      facebook: 'https://facebook.com/emilywhite',
      twitter: 'https://twitter.com/emilywhite',
      linkedin: 'https://linkedin.com/in/emilywhite',
    },
  },
];

const OurTeam = () => {
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleIconClick = (index) => {
    setActiveMember(index === activeMember ? null : index); // Toggle logic
  };

  return (
    <section className={styles.teamSection}>
      <Container>
        <div className={styles.headingContainer} data-aos="fade-up">
          <h2 className={styles.heading}>EXPERT TEAM</h2>
          <p className={styles.subHeading}>Meet Our Leadership</p>
          <div className={styles.line}></div>
        </div>

        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col xs={12} sm={6} md={4} key={member.id} className={styles.teamMemberCol} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <div className={styles.teamMember}>
                <div className={styles.imageWrapper}>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className={styles.teamImage}
                  />
                  <div className={styles.iconContainer}>
                    <FaUser
                      className={styles.userIcon}
                      onClick={() => handleIconClick(index)}
                    />
                    <div
                      className={`${styles.socialIcons} ${activeMember === index ? styles.visible : ''}`}
                    >
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
