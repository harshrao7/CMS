import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { CarouselNavigation } from './CarouselNavigation'
import './Courses.css';
import web1 from '../assets/web1.png';
import dsa1 from '../assets/dsa1.png';
import ml1 from '../assets/ml1.png';
import Productcard from './Productcard';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const Courses = () => {
  return (
    <div className='p-5'>
      <div>
      <Grid
        className='mb-10'
        h='505px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={3} bg='tomato' className='leftproduct'>
          <img src={web1} alt='main-img' />
        </GridItem>
        <GridItem colSpan={2} bg='papayawhip' className='rightproduct'>
          <img src={dsa1} alt='sub-img1'/>
        </GridItem>
        <GridItem colSpan={2} bg='papayawhip' className='rightproduct'>
        <img src={ml1} alt='sub-img2'/>
        </GridItem>
      </Grid>
      </div>

      <Grid className='bottom'>
        <div className='flex'>
        <Productcard/>
        </div>
        
        
      </Grid>
    </div>
  )
}

export default Courses
