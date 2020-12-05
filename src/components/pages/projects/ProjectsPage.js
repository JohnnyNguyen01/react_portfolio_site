import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../../layout/projects/ProjectCard";
import './ProjectsPage.css';

const ProjectsPage = () => {

  return (
    <Container>
      <div >
        <h2>Johnny Nguyen</h2>
      </div>
      <h3 className="mg-t10">Projects</h3>
      <Row className="mg-t10 row">
        <ProjectCard
          title="Portable Bartender"
          subtitle={`Android and iOS app - Flutter \n ⭐⭐⭐⭐⭐`}
          text="Mobile app that contains over 500 cocktail recipes with detailed mixing instructions. Uses the cocktailDB API."
          projectLink="https://apps.apple.com/au/app/portable-bartender/id1510289298"
          badges={["Top 15 iOS Food and Drink"]}
          completionYear="2020"
        />
        <ProjectCard
          title="PetFinder"
          subtitle={`Android and iOS app - Flutter`}
          text="A GPS Tracking app I made for my puppy using Google Maps + Api's and a Raspberry Pi Zero"
          projectLink="https://github.com/Johnnythenewbie/pet_tracker"
          completionYear="2020"
        />
        <ProjectCard
          completionYear="2020 -"
          title="Adonis ATLAS"
          subtitle="Android, iOS, Web = Flutter + React + Firebase"
          text={
            "A content management system for Adonis' coaches' to create workouts for their clients. Client workouts appear on the mobile app, with real time updates and videos of content"
          }
        />
      </Row>
    </Container>
  );
};

export default ProjectsPage;
