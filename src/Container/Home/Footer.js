import React from 'react';
import './Footer.css'
import FooterImg from '../../assets/Home/shape-bg.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={FooterImg} alt='bg-png'></img>
      </div>
    </div>
  );
};

export default Footer;