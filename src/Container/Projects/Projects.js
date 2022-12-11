import React from 'react';
import './Projects.css'
import img1 from '../../assets/Screenshot_1.png'
import img2 from '../../assets/Screenshot_2.png'
import img3 from '../../assets/Screenshot_4.png'

const Projects = () => {
  return (
    <div>
      <h1 className='porject-title' id='projects'>My Projects</h1>
      <div className='container-body'>
        <div className="container">
          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img1} alt="" height='180px' width='280px' />
                <h2>01</h2>
                <h3>Mobile Market</h3>
                <p>Mobile Buying and Selling related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img2} alt="" height='180px' width='280px' />
                <h2>02</h2>
                <h3>Eagle Engineering</h3>
                <p>Engineering service review related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img3} alt="" height='180px' width='280px' />
                <h2>03</h2>
                <h3>Learning Time</h3>
                <p>Educational course information related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img3} alt="" height='180px' width='280px' />
                <h2>03</h2>
                <h3>Learning Time</h3>
                <p>Educational course information related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img3} alt="" height='180px' width='280px' />
                <h2>03</h2>
                <h3>Learning Time</h3>
                <p>Educational course information related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className="content">
                <img src={img3} alt="" height='180px' width='280px' />
                <h2>03</h2>
                <h3>Learning Time</h3>
                <p>Educational course information related website</p>
                <a href="#">DETAILS</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;