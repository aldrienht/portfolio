import React from 'react';
import { NavLink } from 'react-router-dom';
import Aldrien from '../aldrien.jpg'
import { withRouter } from 'react-router-dom';

class NavigationLinks extends React.Component{
	render(){
		const default_path = (this.props.match.path === '/' || this.props.match.path === '/about')

		return(
	    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
	      <NavLink className="navbar-brand" to="/">
	        <span className="d-block d-lg-none">Aldrien Hate</span>
	        <span className="d-none d-lg-block">
	          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Aldrien} alt="" />
	        </span>
	      </NavLink>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="navbar-toggler-icon"></span>
	      </button>
	      <div className="collapse navbar-collapse" id="navbarSupportedContent">
	        <ul className="navbar-nav">
	          <li className="nav-item">
	            <NavLink exact className={default_path ? "activeNav nav-link" : 'nav-link'} to="/about">About</NavLink>
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

export default withRouter(NavigationLinks);
