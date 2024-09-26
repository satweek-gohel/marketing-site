import HeroSection from "./Components/HeroSection";
import ExperienceComponent from "./Components/About";
import Service from "./Components/Services";
import Process from "./Components/Process";
import ConsultationSection from "./Components/ConsultationSection";
import OurServices from "./Components/OurServices";
import CaseStudies from "./Components/CaseStudies";
import OurTeam from "./Components/OurTeam";
export default function Home() {
  return (
    <>
  
   <HeroSection />
   <Process />
   <ExperienceComponent />
   <ConsultationSection />
   <CaseStudies />
   <OurTeam />
   <Service />
  
   <OurServices />
   
   </>

  );
}
