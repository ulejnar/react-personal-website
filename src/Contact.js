import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';


function Contact() {
  
    return (
      <div className="container contactBackground">
        <h3 className="h2 text-center mb-3">KEEP IN TOUCH</h3>
          <div className="row">
            <div className="col-3">
            </div>
            <div className="col">
              <a href="mailto: ulejnar.yahoo.de" className="d-block m-auto">
                <FontAwesomeIcon icon={faEnvelopeSquare} className="contacts-icon d-block m-auto"/>
              </a>
            </div>
            <div className="col">
              <a href="https://www.linkedin.com/in/" className="d-block m-auto" >
                <FontAwesomeIcon icon={faLinkedin} className="contacts-icon d-block m-auto" />
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/ulejnar" className="d-block m-auto">
                <FontAwesomeIcon icon={faGithubSquare} className="contacts-icon d-block m-auto" />
              </a>
            </div>
            <div className="col-3">
            </div>
          </div>
      </div>
    );
  }
  
 

export default Contact;