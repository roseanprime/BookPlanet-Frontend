import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container pt-5 mt-4 text-center">
      <h1 className="mb-2">Find Us on</h1>
      
      <div className="row">
        <div className="col-md-6">
          <div className="person">
            <div className="person-info">
              <h2>Roshan Pradhan</h2>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/roshan-pradhan-a99427176/" target="_blank" rel="noopener noreferrer">
                  <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" className="social-icon" style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://github.com/roseanprime" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" style={{ width: '40px', height: '40px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="person">
            <div className="This is me Niroj graduating from Ironhack lisbon june 9 2O23">
              <h2>Niroj Gautam</h2>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/niroj-gautam-845712197/" target="_blank" rel="noopener noreferrer">
                  <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" className="social-icon" style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://github.com/Niroj167" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" style={{ width: '40px', height: '40px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="text-left mt-3" style={{ marginLeft: '10px', marginBottom: '20px' }}>
        <Link to="/" className="btn btn-primary">Return</Link>
      </div>
    </div>
  );
}

export default AboutUs;
