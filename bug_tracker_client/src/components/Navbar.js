import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='topnav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <input type="text" placeholder="Search.." />
    </div>
  );
}

export default Navbar;
