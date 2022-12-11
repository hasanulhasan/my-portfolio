import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-body'>
      <div className="background-two">
        <div className="link-container">
          <a className="link-one" href="https://jhancock532.github.io/link-hover-effects/">Md Hasanul Karim</a>
        </div>
      </div>
      <div className="background-two link-container">
        <a className="link-two" href="#about-me">About Me</a>
      </div>
      <div className="background-two link-container">
        <a className="link-two" href="#projects">Projects</a>
      </div>
      <div className="background-two link-container">
        <a className="link-two" href="#contact">Contact me</a>
      </div>
      <div className="background-two link-container">
        <a className="link-two resume" href="resume.pdf" download='Md_Hasanul_Karim.pdf'>Resume</a>
      </div>
    </div>
  );
};

export default Navbar;