import React from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';
import * as _ from 'lodash';

export default class Education extends React.Component{
  renderEducation(){
    const education = data.Education.map((data, id) => {
      return(
        <div key={id} className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">{data.school}</h3>
            <div className="subheading mb-3 orange">{ _.capitalize(data.course) }</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-default">{data.date}</span>
          </div>
        </div>
      )
    });

    return <div>{ education }</div>
  }

	render(){
    const self = this;

		return(
      <div className="Education">
        <NavigationLinks />

  			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education Background</h2>

            { self.renderEducation() }
          </div>
        </section>
      </div>
		)
	}
}