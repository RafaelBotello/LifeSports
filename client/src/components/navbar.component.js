import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Navbar(){ 
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">LifeSports</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/aboutcoaches" className="nav-link">About Coaches</Link>
          </li>
          <li className="navbar-item">
          <Link to="/locations" className="nav-link">Locations</Link>
          </li>
          <li className="navbar-item">
          <Link to="/incidents" className="nav-link">Incidents</Link>
          </li>
          <div className="dropdown">
            {/* <button className="dropbtn">Academics
              <i className="fa fa-caret-down"></i>
            </button> */}
            <span>Academics</span>
            <div className="dropdown-content">
              <Link to="/attendence" className="nav-link">Attendence</Link>
              <Link to="/grades" className="nav-link">Grades</Link>
            </div>
          </div> 
          <div className="dropdown">
            <button className="dropbtn">Sports
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to="/exercises" className="nav-link">Exercises</Link>
            <Link to="/create" className="nav-link">Post New Workout</Link>
            <Link to="/user" className="nav-link">Create User</Link>
            <Link to="/fouls" className="nav-link">Fouls</Link>
            </div>
          </div> 
        </ul>
        </div>
      </nav>
    );  
}

export default Navbar