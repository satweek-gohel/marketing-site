'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap'; 
import styles from '../../styles/products/product.module.css';
import { FaCheck } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import { dynamicsServices } from '../../Components/Constants/dynamicsServices';

// Local array of product data


function ProductPage() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = () => {
      const item = dynamicsServices[1];
      setData(item); 
    };
    
    fetchData(); 
  }, []);

  useEffect(() => {
    AOS.init({ duration: 400, easing: 'ease-in-out' }); 
  }, []);

  if (!data) {
    return (
      <Container>
        <Row>
          <Col md={8}>
        
            <Skeleton height={40} width={"80%"} style={{ marginBottom: '10px' }} />
    
            <Skeleton height={20} count={3} style={{ marginBottom: '10px' }} />

    
            <Skeleton height={200} style={{ marginBottom: '10px' }} />
            <Skeleton height={200} style={{ marginBottom: '10px' }} />

        
            <h2 className={styles.heading}>
              <Skeleton height={30} width={"50%"} />
            </h2>
            <Skeleton height={20} count={3} style={{ marginBottom: '10px' }} />

            
            <h2 className={styles.heading}>
              <Skeleton height={30} width={"50%"} />
            </h2>
            <Skeleton height={20} count={3} style={{ marginBottom: '10px' }} />

    
            <h2 className={styles.heading}>
              <Skeleton height={30} width={"50%"} />
            </h2>
            <Skeleton height={20} count={3} style={{ marginBottom: '10px' }} />

        
            <h2 className={styles.heading}>
              <Skeleton height={30} width={"50%"} />
            </h2>
            <Skeleton height={20} count={5} style={{ marginBottom: '10px' }} />

    
            <h2 className={styles.heading}>
              <Skeleton height={30} width={"50%"} />
            </h2>
            <Skeleton height={20} style={{ marginBottom: '10px' }} />
          </Col>

        
          <Col md={4}>
            <div className={styles.menu}>
              <Skeleton height={20} count={5} style={{ marginBottom: '10px' }} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
    
      <div className={styles.banner} data-aos="fade-up">
        <h1>{data.title}</h1> 
      </div>

      <Container>
        <Row>
          
          <Col md={8}>
            <h2 className={styles.heading} data-aos="fade-right">Overview:</h2>
            <p className={styles.description} data-aos="fade-left">{data.description}</p>


            <div data-aos='fade-up'>
            <img
                  src={data.images[0]}
                  alt={data.title}
                  className={styles.image}
                  data-aos="fade-up" // Changed to fade-down animation
                />
                </div>

            <h2 className={styles.heading} data-aos="fade-right">Benefits:</h2>
            <ul className={styles.features}>
              {data.benefits.map((benefit, index) => (
                <li key={index} className={styles.featureItem} data-aos="fade-up">
                  <FaCheck className={styles.checkIcon} /> {benefit}
                </li>
              ))}
            </ul>

            <h2 className={styles.heading} data-aos="fade-right">Services:</h2>
            {data.services.map((service, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index+1 }. {service.type}:</h3>
                <ul className={styles.features}  data-aos="fade-up">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <FaCheck className={styles.checkIcon} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
  <div data-aos='fade-up'>
            <img
                  src={data.images[1]}
                  alt={data.title}
                  className={styles.image}
                  data-aos="fade-up" // Changed to fade-down animation
                />
                </div>

            

            <h2 className={styles.heading} data-aos="fade-right">Expertise:</h2>
            {data.expertise.map((expertise, index) => (
              <div key={index} className={styles.featureItem} data-aos="fade-up">
                <h3 className={styles.type}>{index+1}. {expertise.area}:</h3>
                <p>{expertise.description}</p>
              </div>
            ))}

            <h2 className={styles.heading} data-aos="fade-right">Methodology:</h2>
            <ol className={styles.featureItem}>
              {data.methodology.steps.map((step, index) => (
                <li key={index} data-aos="fade-up">
                   <FaCheck className={styles.checkIcon} />
                  {step}
                </li>
              ))}
            </ol>

            <h2 className={styles.heading} data-aos="fade-up">Contact Us:</h2>
            <p data-aos="fade-up" className={styles.description}>{data.contact}</p>
          </Col>

    
          <Col md={4} >
            <div className={styles.menu} data-aos="fade-up">
              <ul >
              
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                <Link href="/products/dynamics-365">
                Dynamic 365
                  </Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
              
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-office-365">Office 365</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-power-platform">Power Platform</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/products/microsoft-sustainability-manager">Sustainability Manager</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>

              </ul>
            </div>

            <div className={styles.menu} data-aos="fade-up">
              <ul>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/service-details/ai-intelligent-solutions">AI Development & Consulting</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="#">Digital Literacy Training</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/service-details/consuting-service">IT Consultancy</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="#">Microsoft Technology</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="#">Project Management</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="#">Smart Data Solutions</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/service-details/software-development">Software Development</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} data-aos="fade-up">
                  <Link href="/service-details/web-development">Web Development</Link>
                  <GoArrowUpRight className={styles.goicon} />
                </li>
              </ul>
            </div>

            <div className={styles.menu} data-aos="fade-up">
            <img
                  src={data.images[2]}
                  alt={data.title}
                  className={styles.image}
                  data-aos="fade-down"
                />
            </div>

            <div className={styles.menu} data-aos="fade-up">
            <img
                  src={data.images[3]}
                  alt={data.title}
                  className={styles.image}
                  data-aos="fade-down"
                />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
