import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";

class NotFound extends Component {
  render() {
    return (
      <div className="Education">
        <NavigationLinks />

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
          <div className="my-auto">
          	<div className="bg-404">404</div>
          	<div className="text-404">Page Not Found!!!</div>
          </div>
        </section>
      </div>
    );
  }
}

export default NotFound;
