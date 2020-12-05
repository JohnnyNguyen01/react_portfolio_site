import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Image, Button } from "react-bootstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const profilePic = require("../../../assets/images/profile_pic.jpg");

  return (
    <div className="parent-container">
      {/* <Image src={profilePic} roundedCircle className="img-thumbnail avatar" /> */}
      <div className="title-div">
        <h1 className="name-title">Johnny Nguyen</h1>
        <ReactTypingEffect
          text={["Web Developer.", "Mobile Developer.", "Front End Engineer"]}
          className="typewriter"
        />
        <p>I create cross-platform web and mobile solutions</p>
        <Link to="/projects">
          <Button size="lg">View my Projects</Button>
        </Link>
        <p>
            <a href="https://github.com/Johnnythenewbie">Github</a>
        </p>
        <p>
            <a href="https://https://www.linkedin.com/in/johnny-nguyen-b0463b100/.com/Johnnythenewbie">LinkedIn</a>
        </p>

      </div>
    </div>
  );
};

export default HomePage;
