import React from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

export default class WorkExperience extends React.Component {

  renderWorkExperiences(){
    const work_list = data.WorkExperiences.map((data, id) => {
      return(
        <div key={id} className="work_experience resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0 orange">{ data.position }</h3>
            <div className="subheading mb-3 no-transform">
              { data.company} <br/>
              <a href={data.website} target="_blank" rel="noopener noreferrer" className="web_url">{data.website}</a>
            </div>
            <div className="subheading no-transform">{data.location}</div>
            <p>{data.description}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-default">{data.date}</span>
          </div>
        </div>
      )
    });

    return <div>{ work_list }</div>
  }

	render() {
    const self = this;

		return(
      <div className="WorkExperience">
        <NavigationLinks />

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Work Experiences</h2>

            { self.renderWorkExperiences() }
          </div>
        </section>
      </div>
		);
	}
}