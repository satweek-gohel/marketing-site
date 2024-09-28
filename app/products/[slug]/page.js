'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import { usePathname } from 'next/navigation'; // Import usePathname for getting the current pathname
import Link from 'next/link'; // Import Link for navigation
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import styles from '../../styles/products/product.module.css'; // Import the CSS module
import { FaCheck } from 'react-icons/fa'; // Import check icon
import { GoArrowUpRight } from "react-icons/go";
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

function ProductPage() {
  const [data, setData] = useState(null); // State to store the product data
  const [loading, setLoading] = useState(true); // State for loading status
  const pathname = usePathname(); // Get the current pathname

  const slug = pathname.split('/').pop(); // Extract the slug from the pathname
  const apiUrl = 'https://mocki.io/v1/d61fbfa4-9a47-4ffa-b29e-8dc5ed1c3d48'; // Base API URL

  useEffect(() => {
    const getData = async () => {
      if (!slug) return; // Ensure slug is available before making the request
      try {
        const response = await axios.get(apiUrl); // Fetch all data from the API
        const item = response.data.find(item => item.id === slug); // Find the item with matching id
        console.log('Fetched item:', item); // Log the fetched item for debugging
        setData(item); // Set the fetched item
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    };

    getData(); // Call getData directly
  }, [slug]); // Add slug as a dependency

  useEffect(() => {
    AOS.init({ duration: 400, easing: 'ease-in-out' }); // Initialize AOS with faster animations
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching
  }

  return (
    <>
      {/* Full-width Banner Section */}
      <div className={styles.banner} data-aos="fade-up">
        <h1>{data ? data.title : 'Product'}</h1> {/* Title from the product data */}
      </div>

      <Container>
        <Row>
          {/* Left Column: Large Column for Image and Description */}
          <Col md={8}>
            {data ? (
              <>
                <img
                  src={data.image}
                  alt={data.title}
                  className={styles.image}
                  data-aos="fade-down" // Changed to fade-down animation
                />
                <h2 className={styles.heading} data-aos="fade-right">Overview:</h2>
                <p className={styles.description} data-aos="fade-left">{data.overview}</p>

                <h2 className={styles.heading} data-aos="fade-right">Features:</h2>
                <ul className={styles.features}>
                  {data.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem} data-aos="fade-up">
                      <FaCheck className={styles.checkIcon} /> {feature}
                    </li>
                  ))}
                </ul>

                <h2 className={styles.heading} data-aos="fade-right">Goal:</h2>
                <p className={styles.description} data-aos="fade-left">{data.goal}</p>
              </>
            ) : (
              <p>Product not found.</p> // Show message if product data is not available
            )}
          </Col>

          {/* Right Column: Small Column for Vertical Menu */}
          <Col md={4}>
            <div className={styles.menu} data-aos="fade-up">
              {/* <h3 className={styles.heading2}>Related Products</h3> */}
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/web-development">Web Development</Link>
                    <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/mobile-app-development">Mobile App Development</Link>
                    <GoArrowUpRight className={styles.goicon}/>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/seo-services">SEO Services</Link>
                    <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/graphic-design">Graphic Design</Link>
                    <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/content-writing">Content Writing</Link>
                    <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                    <Link href="/products/digital-marketing">Digital Marketing</Link>
                    <GoArrowUpRight className={styles.goicon} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
