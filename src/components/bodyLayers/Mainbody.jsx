import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = () => {
    return (
        
        <Jumbotron fluid id='bookings'>
        <Container>
            <h3 className="project-heading display-4"> Bookings </h3>
            <p>Schedule a meeting with us and get a free consultation!</p>
            <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href="{bookings}"
                                target="_blank"
                                bookings="bookings"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Bookings"
                            >
                                BOOK US
                            </a>
                        </p>
        </Container>
    </Jumbotron>
    );
};
  
export default MainBody;