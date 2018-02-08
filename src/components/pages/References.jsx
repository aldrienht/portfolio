import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

class References extends Component {
  renderReferences(){
    const reference_list = data.References.map((data, id) => {
      return(
        <div key={id} className="references resume-item d-flex flex-column flex-md-row mb-7">
          <div className="resume-content mr-auto">
            <h3 className="mb-0 orange">{data.name}</h3>
            <div className="subheading mb-3 no-transform">{data.company}</div>
            <div className="subheading text-primary">{data.position}</div>
            <p>{data.contact}</p>
          </div>
        </div>
      )
    });

    return <div>{ reference_list }</div>
  }

  render() {
    const self = this;

    return (
      <div className="References">
        <NavigationLinks />

      	<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="renferences">
          <div className="my-auto">
            <h2 className="mb-5">References</h2>

            { self.renderReferences() }
          </div>
        </section>
      </div>
    );
  }
}

export default References;