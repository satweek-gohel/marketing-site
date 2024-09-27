import React from 'react'
import PageBanner from '../Components/PageBanner'
import ServiceCard from '../Components/Services/ServiceCard'
import WhyChooseUs from '../Components/About Page/WhyChooseUs'
import LogoCarousel from '../Components/Services/LogoCarousel'
function app() {
  return (
        <>
       <PageBanner title="Services" backgroundImage="/about-banner.jpg" /> 
       <ServiceCard />
       <WhyChooseUs />    
       <LogoCarousel />
        </>
  )
}

export default app