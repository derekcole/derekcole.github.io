import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilePicture from "../resources/derekcole.jpg";

const about = ({ heading, description, resume }) => {

    return (
        
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0 py-5">
        <div className="container container-fluid">
            <div className="row">
                <div className="col-5 d-none d-lg-block align-self-center">
                    <img 
                        className="border border-secondary rounded-circle" 
                        src={profilePicture}
                        alt="profilepicture"
                        width={100}
                        height={100}/>
                </div>

                <div className={`col-lg`}>
                    <h2 className="display-4 mb-5 text-center">{heading}</h2>
                    <p className="lead text-center">{description}</p>
                    <p className="lead text-center">
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};
  
export default about;