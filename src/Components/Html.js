import React from 'react'
import SideNavbar from './SideNavbar'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import MatchedContent from './MatchedContent';
// import { useState } from 'react';
// import './SideBar.css';
import { Grid, GridItem } from '@chakra-ui/react'
// import Footer from './Footer';

const Html = (props) => {

  console.log(props.name);
  const location = useLocation();
  // const currentRoute = location.pathname;
  const queryParams = new URLSearchParams(location.search);
  const qpm = queryParams.get("page")
  const qps = queryParams.get("subpage");

  // const [isOpen, setIsOpen] = useState(false);

  //   const toggleSidebar = () => {
  //       setIsOpen(!isOpen);
  //   };
  return (
    <>
      
      <Grid
        templateAreas={`"nav main"
                  `}
        gridTemplateRows={'42em 1fr'}
        gridTemplateColumns={'220px 1fr'}
        h='89vh'
        color='blackAlpha.700'
      >
        <GridItem area={'nav'}>
          <SideNavbar query={qpm} />
        </GridItem>

        <GridItem area={'main'}>
          <MatchedContent path={qpm} query={qps===null?qpm: qps} />
        </GridItem>

        
      </Grid>

      {/* <GridItem area={'footer'}>
            <Footer/>
        </GridItem> */}
    </>
  )
}

export default Html;