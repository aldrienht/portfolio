import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

class About extends Component {
  renderPublicProfile(){
    const public_profile = data.PublicProfileLinks.map((data, id) => {
      return(
        <li key={id} className="list-inline-item">
          <a href={ data.url } target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className={ data.icon }></i>
            </span>
          </a>
        </li>
      )
    });

    return(
      <ul className="list-inline list-social-icons mb-0 public_profile">
      { public_profile }
      </ul>
    )
  }

  renderPersonalQualities(){
    const qualities = data.PersonalQualities.map((data, id) => {
      return(
        <li key={id}><i className="fa-li fa fa-check"></i>{ data.description }</li>
      )
    });
    
    return <ul className="fa-ul mb-0">{qualities}</ul>
  }

  render() {
    const self = this;

    return (
      <div className="About">
        <NavigationLinks />
        
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div className="my-auto">
            <h1 className="mb-0">{ data.BasicInfo.firstName } 
              <span className="text-primary">&nbsp;{ data.BasicInfo.lastName }</span>
            </h1>
            <div className="subheading mb-5 no-transform">{ data.BasicInfo.address } 
              <a href="mailto:aldrienhate@yahoo.com"> · { data.BasicInfo.email }</a>
            </div>
            <p className="mb-5">{ data.professionalOverview }</p>
            
            <div className="subheading mb-3">Developer Qualities</div>
            { self.renderPersonalQualities() }

            { self.renderPublicProfile() }
          </div>
        </section>
    </div>
    );
  }
}

export default About;
