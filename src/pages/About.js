import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const About = () => (
  <div class="route-page-content">
    <Jumbotron className="jumbotron">
      <Container>
        <h1>About</h1>
        <hr />
        <p><em>All Your Lists, All One Place.</em></p>
        <p>A simple React SPA made using Hooks.
           Using localStorage to keep your lists data persisting, 
           and a design approach implementing React-Bootstrap and Font-Awesome. </p>
        <p />
      </Container>
    </Jumbotron>
  </div>
);

export default About;
