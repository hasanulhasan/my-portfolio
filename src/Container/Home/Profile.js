import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href="https://www.facebook.com/hasanulkarim.hasan1/">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href="https://www.instagram.com/hasanulhasan/">
                <i className='fa fa-instagram'></i>
              </a>
              <a href="​​https://github.com/hasanulhasan">
                <i className='fa fa-github'></i>
              </a>
              <a href="​https://www.linkedin.com/in/md-hasanul-karim-49284910a/">
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Hasan</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>

                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN Stack Developer",
                    1000,
                    "Programming enthusiast",
                    1000,
                    "Programming enthusiast",
                    1000,
                  ]}>
                </Typical>
              </h1>
              <span className='profile-role-tagline'>
                do many wonderful website by modern technology
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {""}
              Hire me{""}
            </button>
            <a href="resume.pdf" download='Md_Hasanul_Karim.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;