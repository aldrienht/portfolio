import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";
import * as data from '../../services/data/data';

class Contact extends Component {

  renderContactWays(){
    const ways = data.ContactWays.map((data, id) => {
      return( <li key={id}><i className={data.icon}></i>{data.text}</li> )
    });

    return <ul className="fa-ul mb-0 contact_ways">{ ways }</ul>
  }

  render() {
    const self = this;

    return (
      <div className="Contact">
        <NavigationLinks />
        
  			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
          <div className="my-auto">
            <h2 className="mb-5">Contact Me</h2>

            <div className="mb-3">If you find my skills and work experiences appropriate to your job openings, please feel free to contact me using the following:</div>
            <br/>
            { self.renderContactWays() }
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
