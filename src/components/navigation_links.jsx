import React from 'react';
import { NavLink } from 'react-router-dom';
import Aldrien from '../aldrien.jpg'

export default class NavigationLinks extends React.Component{
	render(){
		return(
	    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
	      <a className="navbar-brand" href="/about">
	        <span className="d-block d-lg-none">Aldrien Hate</span>
	        <span className="d-none d-lg-block">
	          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Aldrien} alt="" />
	        </span>
	      </a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="navbar-toggler-icon"></span>
	      </button>
	      <div className="collapse navbar-collapse" id="navbarSupportedContent">
	        <ul className="navbar-nav">
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/about">About</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/work_experience">Work Experience</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/education">Education</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/skills">Skills</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/references">References</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/interest">Interests</NavLink>
	          </li>
	          <li className="nav-item">
	            <NavLink exact activeClassName="activeNav" className="nav-link" to="/contact">Contact Me</NavLink>
	          </li>
	        </ul>
	      </div>
	    </nav>
		);
	}
}