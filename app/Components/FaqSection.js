'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/FaqSection.module.css';

const FaqSection = () => {
  const [open, setOpen] = useState([false, false, false]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 0, // Adjust offset to prevent horizontal scrollbar
    });
  }, []);

  const faqs = [
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via email, chat, or phone through our support page.',
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a full refund within 30 days of purchase if you are unsatisfied with the service.',
    },
    {
      question: 'Do you provide 24/7 customer support?',
      answer: 'Yes, we provide round-the-clock support for all our services.',
    },
  ];

  const toggleFaq = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <>
      <Head>
        <title>FAQs | Our Services</title>
        <meta name="description" content="Frequently asked questions about our services" />
      </Head>
      
      <section className={styles.faqSection}>
        <Container>
          <Row>
            {/* Left side with heading and button */}
            <Col md={5} className="text-md-start text-center mb-4" data-aos="fade-up">
              <h5 className={styles.subTitle}>- FAQ</h5>
              <h2 className={styles.mainTitle}>Frequently Asked Questions</h2>
              <Button variant="outline-primary" className={styles.viewAllButton}>View All</Button>
            </Col>

            {/* Right side with FAQ accordion */}
            <Col md={7} data-aos="fade-up">
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  <div
                    className={styles.faqHeader}
                    onClick={() => toggleFaq(index)}
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={open[index]}
                  >
                    <FaQuestionCircle className={styles.icon} />
                    <span>{faq.question}</span>
                    <BsChevronDown
                      className={`${styles.chevronIcon} ${open[index] ? styles.rotate : ''}`}
                    />
                  </div>
                  <Collapse in={open[index]}>
                    <div id={`faq-answer-${index}`} className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  </Collapse>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FaqSection;
