import React from 'react'
import { OurTimeline } from './OurTimeline'
import Hero from './Hero'
import HeroVideo from "./HeroVideo"
import { ChooseUs } from './ChooseUs'
import Footer from "../components/Footer"
import EmployeeTestimonials from './EmployeeTestimonials'
import DynamicOurVision from './DynamicOurVision'

function Page() {
  return (
    <>
    <div className='mt-12'>

        <Hero />
        
        <HeroVideo />
      <div className='flex mt-32 items-center justify-center'> 

<DynamicOurVision 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="0, 102, 255"
/> </div>
    
        <div className="content-visibility-auto"><OurTimeline /></div>
        <div className="content-visibility-auto"><EmployeeTestimonials /></div>
        <div className="content-visibility-auto"><ChooseUs /></div>
    

    </div>
    <Footer />
    </>
  )
}

export default Page