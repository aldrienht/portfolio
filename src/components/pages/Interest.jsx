import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

class Interest extends Component{
	render(){
		return(
      <div className="WorkExperience">
	      <NavigationLinks />
				<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
		      <div className="my-auto">
		        <h2 className="mb-5">Interests</h2>
		        { data.Interests }
		      </div>
		    </section>
	    </div>
		)
	}
}

export default Interest;