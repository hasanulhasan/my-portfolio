import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactMe from '../Container/ContactMe/ContactMe';
import Home from '../Container/Home/Home';
import Projects from '../Container/Projects/Projects';

const Main = () => {
  return (
    <div>
      <Home></Home>
      {/* <AboutMe></AboutMe> */}
      <Projects></Projects>

      <ContactMe></ContactMe>
    </div>
  );
};

export default Main;