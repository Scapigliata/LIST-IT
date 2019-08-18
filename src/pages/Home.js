import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Lists from "../components/Lists";

const Home = () => (
  <div id="home-page-content">
    <Jumbotron className="jumbotron">
      <Container>
        <h1>LIST IT</h1>
        <p>All Your Lists, All One Place.</p>
          <Lists />
      </Container>
    </Jumbotron>
  </div>
);

export default Home;
