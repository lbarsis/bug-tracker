import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='topnav'>
      {/* <NavLink to='/'>Home</NavLink> */}
      <NavLink to='/'>Projects</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </div>
  );
}

export default Navbar;
