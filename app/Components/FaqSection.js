'use client'
import { useState } from 'react';
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import Head from 'next/head';
import styles from '../styles/FaqSection.module.css';

const FaqSection = () => {
  const [open, setOpen] = useState([false, false, false]);

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
            <Col md={5} className="text-md-start text-center mb-4">
              <h5 className={styles.subTitle}>- FAQ</h5>
              <h2 className={styles.mainTitle}>Most Common Questions <br></br>About Our Services</h2>
              <Button variant="primary" className={styles.viewAllButton}>View All FAQs</Button>
            </Col>

            {/* Right side with FAQ accordion */}
            <Col md={7}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
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
