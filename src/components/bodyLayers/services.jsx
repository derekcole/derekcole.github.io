import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilePicture from "../resources/derekcole.jpg";
import { services } from "./config";

const Services = ({ heading, description }) => {

    return (
        <div id='services' className={`col-lg`}>
                        <h2 className="display-4 mb-5 text-center">{services.heading}</h2>
                        <p className="lead text-center">{services.message}</p>

                        
        </div>

        

        

                    

                    

                    
    
    );
};
  
export default Services;