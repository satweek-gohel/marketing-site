import React from 'react'
import About from '../Components/About'
import ConsultationSection from '../Components/ConsultationSection'
import OurTeam from '../Components/OurTeam'
import PageBanner from '../Components/PageBanner'
import ProcessComponent from '../Components/About Page/ProcessComponent'
import WhyChooseUs from '../Components/About Page/WhyChooseUs'

function page() {
  return (
   <>
 <PageBanner title="About Us" backgroundImage="/about-banner.jpg" /> 
   <About />
   <ConsultationSection />
   <ProcessComponent />
   <WhyChooseUs />
   <OurTeam />
   </>
  )
}

export default page