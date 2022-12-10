import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div className='container-body'>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Adult_male_Royal_Bengal_tiger.jpg/800px-Adult_male_Royal_Bengal_tiger.jpg" alt="" height='180px' width='280px' />
              <h2>01</h2>
              <h3>Card One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>02</h2>
              <h3>Card Two</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>03</h2>
              <h3>Card Three</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;