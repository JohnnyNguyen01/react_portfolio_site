import React from "react";
import { Container, Image, Button, Row } from "react-bootstrap";
import ProjectCard from "./components/layout/projects/ProjectCard";
import NavigationBar from "./components/layout/NavigationBar";
import "./App.css";

const App = () => {
  const profilePic = require("./assets/images/profile_pic.jpg");

  return (
    <div>
      <NavigationBar />
      <Container>
        <div className="justify-content-md-center">
          <Image
            src={profilePic}
            roundedCircle
            className="img-thumbnail"
            style={{ width: "12%", height: "12%" }}
          />
          <h2>Johnny Nguyen</h2>
        </div>
        <h3 className="mg-t10">Projects</h3>
        <Row className="mg-t10">
          <ProjectCard
            title="Portable Bartender"
            subtitle={`Android and iOS app - Flutter \n ⭐⭐⭐⭐⭐`}
            text="Mobile app that contains over 500 cocktail recipes with detailed mixing instructions. Uses the cocktailDB API."
            projectLink="https://apps.apple.com/au/app/portable-bartender/id1510289298"
            badges={["Top 15 iOS Food and Drink"]}
            completionYear='2020'
          />
          <ProjectCard
            title="PetFinder"
            subtitle={`Android and iOS app - Flutter`}
            text="A GPS Tracking app I made for my puppy using Google Maps + Api's and a Raspberry Pi Zero"
            projectLink=""
            completionYear='2020'
          />
        </Row>
      </Container>
    </div>
  );
};

export default App;
