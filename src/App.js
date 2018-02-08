import React, { Component } from 'react';
import AppRoutes from "./router/app_routes";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="container-fluid p-0">
	        <AppRoutes />
        </div>
      </div>
    );
  }
}

export default App;
