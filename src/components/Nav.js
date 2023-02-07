/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaMicrophone } from 'react-icons/fa';
import { SlSettings } from 'react-icons/sl';

const Nav = () => (
  <nav className="main-nav">
    <div className="nav-left">
      <NavLink to="/">
        <FaArrowAltCircleLeft />
      </NavLink>
      <p> 2023</p>
    </div>
    <div className="nav-center">
      <p> Global crypto forcast</p>
    </div>
    <div className="nav-right">
      <NavLink to="/"><FaMicrophone /></NavLink>
      <NavLink to="/"><SlSettings /></NavLink>
    </div>
  </nav>
);

export default Nav;
