import React from 'react';
import './Projects.css'
import img1 from '../../assets/Screenshot_1.png'
import img2 from '../../assets/Screenshot_2.png'
import img3 from '../../assets/Screenshot_4.png'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'Mobile Market',
      description: 'Mobile Buying and Selling related website',
      img: img1
    },
    {
      id: 2,
      name: 'Eagle Engineering',
      description: 'Engineering service review related website',
      img: img2
    },
    {
      id: 3,
      name: 'Learning Time',
      description: 'Educational course information related website',
      img: img3
    }
  ]


  return (
    <div>
      <h1 className='porject-title' id='projects'>My Projects</h1>
      <div className='container-body'>
        <div className="container">
          {
            projects.map(project => <div className="card" key={project.id}>
              <div className="box">
                <div className="content">
                  <img src={project.img} alt="" height='180px' width='280px' />
                  <h2>{project.id}</h2>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={`/project/${project.id}`}>
                    DETAILS
                  </a>
                </div>
              </div>
            </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Projects;