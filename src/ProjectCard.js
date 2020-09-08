import React from "react";

function ProjectCard({
  project: { img, name, technologies, github, demo, description },
}) {
  return (
    <div className="card" style={{ marginBottom: "3rem", minHeight: "43rem" }}>
      <img src={img} className="card-img-top" alt="daisies" />
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{technologies}</h6>
        <p className="card-text">{description}</p>
        <a href={github} className="card-link">
          github
        </a>
        <a href={demo} className="card-link">
          demo
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
