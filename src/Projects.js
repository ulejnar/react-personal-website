import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard'
import projects from "./ProjectInfo"

function Project() {
  console.log(projects[1].name)

  return (
   
    <div className="container">
      <div className="row"> 
      {projects.map((p, idx) => (
        <div className="col-md-6 col-lg-4" key={idx}>
          <ProjectCard  project={p}/>
        </div>
      ))} 
      </div>
    </div>
  );
}

export default Project;