import React from 'react';

import {
  mainBody,
  aboutMe,
  footer,
  services
} from './config';

import Booking from './Mainbody';
import About from './about';
import NavBar from './navbar';
import Footer from './footer';
import Services from './services'

const Home = () => {
    return (
      <>

        <NavBar
        />

        <About
        description={aboutMe.description}
        />
        
        <Booking    
        />

        <Services
        />

        <Footer
        icons={mainBody.icons}
        />
        
      </>
    );
  };
  
  
  export default Home;