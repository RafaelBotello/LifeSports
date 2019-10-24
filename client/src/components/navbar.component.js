import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar(){ 
  return (
    <nav>
      <Link to="/" className="navBrand">LifeSports</Link>
      <div>
      <ul className="ulContainer">
        <li>
        <Link to="/" className="navLink">Exercises</Link>
        </li>
        <li>
        <Link to="/create" className="navLink">Post New Workout</Link>
        </li>
        <li>
        <Link to="/user" className="navLink">Create User</Link>
        </li>
      </ul>
      </div>
    </nav>
  );  
}
export default Navbar