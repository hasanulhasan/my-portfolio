import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div>
      <h1 className='form-title' id='contact'>Get In touch with me</h1>
      <div className='form-body'>
        <div className="background">
          <div className="form-container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                  <div className="app-contact">CONTACT INFO : +8801862086965</div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" required />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL" required />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="CONTACT NO" required />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="MESSAGE" required />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="credits">
              copyright
              <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
                <svg className="dribbble" viewBox="0 0 200 200">
                  <g stroke="#ffffff" fill="none">
                    <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                    <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
                    <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
                    <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
                  </g>
                </svg>
                Md Hasanul Karim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;