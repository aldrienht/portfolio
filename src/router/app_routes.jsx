import React from 'react';

import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import WorkExperience from '../components/pages/WorkExperience';
import Education from '../components/pages/Education';
import Skills from '../components/pages/Skills';
import Interest from '../components/pages/Interest';
import References from '../components/pages/References';
import NotFound from '../components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class AppRoutes extends React.Component {
	render() {
		return(
			<Router>
				<Switch>
	        <Route exact path='/' component={About}/>
				  <Route exact path='/about' component={About}/>
				  <Route exact path='/contact' component={Contact}/>
				  <Route exact path='/work_experience' component={WorkExperience}/>
				  <Route exact path='/education' component={Education}/>
				  <Route exact path='/skills' component={Skills}/>
				  <Route exact path='/references' component={References}/>
				  <Route exact path='/interest' component={Interest}/>
				  <Route exact path='/contact' component={Contact}/>

				  {/* when none of the above match, <NoMatch> will be rendered */}
				  <Route component={NotFound}/>
			  </Switch>
		  </Router>
		)
	}

}