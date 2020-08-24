import React from 'react';
import './About.css';
import photo from './Ulrika-edited.jpg'
import background from'./Background.jpeg'


function About() {
  
  return (
    
    <div className="container-fluid" >
      <div className="container ">
      <div className="row ">
        <div className="col-7">
          <h2>Welcome</h2>
          <p>
            Hello, my name is Ulrika. I'm a Bay Area-based software engineer searching for new opportunities. For the past two years I mostly focused on Java programming and this spring I enrolled in Rithm School's Immersive Full Stack Software Engineering course. At Rithm, I learned how to create full-stack web applications, with a focus on JavaScript, Python, Flask, SQL, Node and React.
          </p>
          <p>
            I always enjoyed math and problem solving but I never considered software engineering as a possible career path because female programers were extremely rare when I was a college student. During my graduate studies I got an opportunity to work on a climate change research but sadly I had to decline because good coding skills were one of the prerequisites. Probably around that time I got determined to learn coding.</p>
          <p>
            After a career in air pollution research and environmental testing I relocated to the USA to the San Francisco Bay Area where I took several computer science classes at the College of San Mateo as well as completed Java programming certificate. In my first Java class I had an excellent female professor thanks to whom I discovered my passion about coding and realized that also women can be really good at programming. 
          </p>
          <p>
            I graduated from Rithm in August 2020, and I am excited to put my skills to use! I am looking for a full stack engineering role where I can use my software development knowledge, as well as learn new languages and tools.
          </p>
          <p>
            Besides immersing myself in web development, I enjoy hiking, canoeing, swimming, traveling, creative writing and the company of my family and friends.
          </p>
            
         
          
          
         
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <img src={photo} className="img-fluid w-100 rounded-lg shadow p-3 mb-5 bg-white rounded"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;