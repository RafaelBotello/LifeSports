import React, { Component } from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
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
=======
function Navbar() {
  return (
    <nav>
      <Link to="/" className="navBrand">
        LifeSports
      </Link>
      <div>
        <ul className="ulContainer">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/coach" className="nav-link">
              Create Coach
            </Link>
            <Link to="/aboutcoaches" className="nav-link">
              About Coaches
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/locations" className="nav-link">
              Locations
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/incidents" className="nav-link">
              Incidents
            </Link>
          </li>
          <li>
            <Link to="/exercise" className="navLink">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/create" className="navLink">
              Post New Workout
            </Link>
          </li>
          <li>
            <Link to="/user" className="navLink">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
>>>>>>> 7565dce1cba7e99cd456c29f5f0cfabe29195e75
}
export default Navbar;
