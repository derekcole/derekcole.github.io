import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilePicture from "../resources/derekcole.jpg";
import { aboutMe } from "./config";

const about = ({ heading, description }) => {

    return (
        
        <div id="about" className="jumbotron jumbotron-fluid m-0 py-5">
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-5 d-none d-lg-block align-self-center">
                        <img 
                            className="border border-secondary rounded-circle" 
                            src={profilePicture}
                            alt="profilepicture"
                            width={200}
                            height={200}/>
                            
                    </div>

                    <div className={`col-lg`}>
                        <h2 className="display-4 mb-5 text-center">{aboutMe.heading}</h2>
                        <p className="lead text-center">{description}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default about;