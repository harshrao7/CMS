import React from 'react'
import LandingPage from './Components/LandingPage';
import SliderContent from './Components/SliderContent';
import { CarouselNavigation } from './Components/CarouselNavigation';
import { TestimonialCard } from './Components/TestimonialCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageCarousel from './Components/ImageCarousel';
import ContactUs from './Components/ContactUs';
import { StarsCanvas } from './Components/canvas';
const Hemanth = () => {
  return (
    <div>
      
      <LandingPage />
      <CarouselNavigation />
      {/* <SliderContent /> */}
      <ImageCarousel/>
      <TestimonialCard />
      <div id="contact-us" className='bg-[#222527]'>
        <ContactUs/>
      </div>
    </div>
  )
}

export default Hemanth
