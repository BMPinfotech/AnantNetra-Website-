import React from 'react'
import { OurTimeline } from './OurTimeline'
import OurVision  from './OurVision'
import Hero from './Hero'
import HeroVideo from "./HeroVideo"
import { ChooseUs } from './ChooseUs'
import Footer from "../components/Footer"

function Page() {
  return (
    <>
    <div className='mt-12'>

        <Hero />
        <HeroVideo />
      <div className=' flex mt-30 items-center justify-center'> 

<OurVision 
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
   
        <OurTimeline />
        <ChooseUs />
    

    </div>
    <Footer />
    </>
  )
}

export default Page