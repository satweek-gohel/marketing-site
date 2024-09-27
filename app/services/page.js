import React from 'react'
import PageBanner from '../Components/PageBanner'
import ServiceCard from '../Components/Services/ServiceCard'
function app() {
  return (
        <>
       <PageBanner title="Services" backgroundImage="/about-banner.jpg" /> 
       <ServiceCard />    
        </>
  )
}

export default app