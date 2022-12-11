import React from 'react';
import Footer from './Footer';
import Profile from './Profile';
import './Home.css'
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar></Navbar>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
};

export default Home;