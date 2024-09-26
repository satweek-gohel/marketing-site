'use client'
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/PopularNews.module.css';

// Mock data to replace the API call
const newsData = [
  {
    title: "Additions in conveying or collected objection",
    publishedAt: "2020-08-12T00:00:00Z",
    author: "John Botha",
    urlToImage: "/news1.jpg", // Replace with your image path
  },
  {
    title: "Discourse ye continued pronounce we abilities",
    publishedAt: "2020-10-05T00:00:00Z",
    author: "Jork Mon",
    urlToImage: "/news2.jpg", // Replace with your image path
  },
  {
    title: "Children greatest online extended delicate of",
    publishedAt: "2020-12-27T00:00:00Z",
    author: "Spark Lee",
    urlToImage: "/news3.jpg", // Replace with your image path
  },
];

const PopularNews = () => {
  return (
    <>
      <Head>
        <title>Popular News | Latest from Our Blog</title>
        <meta name="description" content="Check out the latest news and blog posts about our services and technology." />
        <meta name="keywords" content="news, blog, tech updates, services" />
      </Head>

      <section className={styles.newsSection}>
        <Container>
          {/* Subtitle and Title */}
          <div className="text-center mb-5">
            <h5 className={styles.subtitle}>Popular News</h5>
            <h2 className={styles.title}>Latest from Our Blog</h2>
          </div>

          {/* News Cards */}
          <Row>
            {newsData.map((newsItem, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className={styles.newsCard}>
                  {/* Optimized Next.js Image */}
                  <div className={styles.imageWrapper}>
                    <Image
                      src={newsItem.urlToImage}
                      alt={newsItem.title}
                      width={600}
                      height={400}
                      className={styles.cardImage}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>

                  {/* Card Body */}
                  <Card.Body>
                    <small className="text-muted date">
                      {new Date(newsItem.publishedAt).toLocaleDateString()} / {newsItem.author || 'Unknown'}
                    </small>
                    <Card.Title className={styles.cardTitle}>{newsItem.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PopularNews;
