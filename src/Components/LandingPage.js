import React from 'react';
import { CardDefault } from './CardDefault';
import SearchBar from './SearchBar';
import './LandingPage.css';
import { CarouselNavigation } from './CarouselNavigation';
import { StarsCanvas } from './canvas';
// import Hemanth from '../Hemanth';
// import SliderContent from './SliderContent';
const LandingPage = () => {
  return (
    <>

      <div className='background'>
        <div>
          <StarsCanvas />
        </div>
        <SearchBar />
        <CardDefault />
        {/* <CarouselNavigation/> */}
        {/* <Hemanth/> */}
      </div>
    </>
  )
}

export default LandingPage
