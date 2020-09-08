import React from 'react';
import photo from './Ulrika-edited.jpg'
import './Home.css'


function Home() {
  
  return (
    
    <div className="container-fluid">
      <div className="container ">
      <div className="row ">
        <div className="col-md-7" >
          <p>
            <h2>Hello!</h2>
            <h3>My name is Ulrika </h3> 
            <br/>
            I'm a Bay Area-based software engineer searching for new opportunities. For the past two years I mostly focused on Java programming and this summer I graduated from Rithm School's Immersive Full Stack Software Engineering course. At Rithm, I learned how to create full-stack web applications, with a focus on JavaScript, Python, Flask, SQL, Node and React.
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <img src={photo} className="img-fluid w-100 rounded-lg shadow p-3 mb-5 bg-white rounded"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;