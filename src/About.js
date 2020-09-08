import React from "react";
import aboutMe from "./Resources/Texts/AboutMe";

function About() {
  return (
    <div className="container-fluid">
      <div className="container ">
        <div className="row ">
          <div className="col-1"></div>
          <div className="col-10">{aboutMe}</div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
