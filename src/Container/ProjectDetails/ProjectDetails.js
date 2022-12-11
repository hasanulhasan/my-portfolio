import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
  const data = useLoaderData();
  const { name, description } = data[0];
  console.log(data);
  return (
    <div>
      <div className="projcard-container">
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=1041" alt='' />
            <div className="projcard-textbox">
              <div className="projcard-title">{name}</div>
              <div className="projcard-subtitle">{description}</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">HTML</span>
                <span className="projcard-tag">CSS</span>
                <span className="projcard-tag">Bootstrap</span>
                <span className="projcard-tag">Tailwind</span>
                <span className="projcard-tag">React Js</span>
                <span className="projcard-tag">Node Js</span>
                <span className="projcard-tag">Express Js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectDetails;