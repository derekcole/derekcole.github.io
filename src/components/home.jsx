import React from 'react';

import {
  mainBody,
  aboutMe,
  footer
} from './config';

import MainBody from './bodyLayers/Mainbody';
import About from './bodyLayers/about';
import NavBar from './bodyLayers/navbar';
import Footer from './bodyLayers/footer';

const Home = () => {
    return (
      <>

        <NavBar
        />
        
        <MainBody    
        
        />

        <About
        />

        <Footer
        icons={mainBody.icons}
        />
        
      </>
    );
  };
  
  
  export default Home;