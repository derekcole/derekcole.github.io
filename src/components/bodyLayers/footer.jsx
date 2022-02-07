import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { footer } from './config';

const Footer = ({icons}) => {
    return (
        
        <div className="p-2">
      {/*  {icons.map((icon, index) => (
            <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}>
                    <i className={`fab ${icon.image}  fa-3x socialicons`} />
      </a>*/}
        <p>{footer.message}</p>
    </div>
    
    );
};
  
export default Footer;