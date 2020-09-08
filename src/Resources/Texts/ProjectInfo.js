import warbler from "../Photos/Warbler.png";
import memory from "../Photos/Memory_game.png";
import jeopardy from "../Photos/Jeopardy.png";
import jobly from "../Photos/Jobly.png";
import website from "../Photos/Website.png";

const projects = [
  {
    img: jobly,
    name: "Jobly",
    technologies: "React, Express, PostgreSQL, Fullstack",
    description:
      "Fullstack Javascript job searching app built with a React frontend, PostgreSQL database, and Node/Express backend. Users can sign up or login, apply for posted jobs and search them by position, browse and search hiring companies by name, and view the jobs posted by each company. User routes are protected through authorization/authentication middleware on the server and JWTokens on the client.",
    github: "https://github.com/ulejnar/jobly-frontend",
    demo: "http://exultant-turkey.surge.sh/",
  },

  {
    img: warbler,
    name: "Warbler",
    technologies: "Flask, Jinja, Bootstrap, SQLAlchemy, Bcrypt",
    description:
      "A full-stack Twitter clone app with Flask backend, PostgreSQL database, and Jinja-based templating for the frontend. Users can create an account, follow/unfollow other users and see their posts in timeline, like one another’s posts, write posts, delete posts. Allows users to search by post as well as edit their profile information. Uses Bcrypt for authentication and SQLAlchemy for database management.",
    github: "https://github.com/ulejnar/warbler",
    demo: "https://warbler-rithm15.herokuapp.com/",
  },

  {
    img: website,
    name: "Personal website",
    technologies: "React, React-Router, Bootstrap, Forntend",
    description:
      "I designed my webiste to be a sinle page application using React. My goal was to have a page with a simple design and making its content easy to navigate.",
    github: "https://github.com/ulejnar/react-personal-website",
    demo: "https://ulejnar.github.io/react-personal-website/",
  },

  {
    img: jeopardy,
    name: "Jeopardy",
    technologies: "JavaScript, jQuery, axios, external APIs",
    description:
      "A Jeopardy-like game, and one of my first Javascript projects in Rithm that uses axios, external APIs, and jQuery. Click on a question mark to reveal a question, then click again to see the answer. Hit the 'Restart' button to get new categories and questions. Note: I can't share the repo for this project because this was part of an assessment",
    github: "github",
    demo: "http://towering-rings.surge.sh/",
  },

  {
    img: memory,
    name: "Memory card game",
    technologies: "Javascript, CSS, HTML",
    description:
      "Card-based memory game using HTML, CSS, and JavaScript that I built before attending Rithm school when I was first learning CSS and HTML.",
    github: "https://github.com/ulejnar/matchingGame",
    demo: "https://ulejnar.github.io/matchingGame/",
  },
];

export default projects;
