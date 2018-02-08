import React from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

export default class Skills extends React.Component{
  renderWorkFlow(){
    const work_flows = data.WorkFlows.map((data, id) => {
      return(
        <li key={id}><i className="fa-li fa fa-check"></i>{ data.work }</li>
      )
    });

    return(
      <ul className="fa-ul mb-0">{work_flows}</ul>
    )
  }

  renderSkills(){
    const skills = data.SkillSets.map((data, id) => {
      return(
        <li key={id} className="list-inline-item"><i className={data.icon}></i></li>
      )
    });

    return <ul className="list-inline list-icons">{skills}</ul>
  }

  render(){
    const self = this;
    
		return(
      <div className="Skills">
        <NavigationLinks />

  			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3 orange">Programming Languages &amp; Tools</div>
            { self.renderSkills() }

            <div className="subheading mb-3 orange">Workflow</div>
            { self.renderWorkFlow() }
          </div>
        </section>
      </div>
		)
	}
}