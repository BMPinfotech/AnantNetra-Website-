"use client"
import React from 'react'
import Slider from 'react-infinite-logo-slider'



function InfiniteSlider() {
  return (
     <Slider
            width="250px"
            duration={10}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="./logo-mfour.svg" alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="./ATONARP.svg" alt="any2" className='w-36 dark:hidden ' />
                <img src="./ATONARPDark.svg" alt="any2" className='w-36 hidden dark:block' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="./BoundRY.svg" alt="any4" width="200" height="200" className='w-36 dark:hidden' />
                <img src="./BOUNDARYDark.svg" alt="any4" width="200" height="200" className='w-36 hidden dark:block' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="./Cover.svg" alt="any5" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="./Telexistence.svg" alt="any5" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="./THINKCYTE-LOGO-DK-1000W.svg" alt="any5" className='w-36' />
            </Slider.Slide>
           
           
        </Slider>
      
    
  )
}

export default InfiniteSlider



