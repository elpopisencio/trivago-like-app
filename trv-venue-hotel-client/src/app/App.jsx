import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/Home';
import Hotel from './hotel/Hotel';
import Confirmation from './confirmation/Confirmation';
import Administration from './administration/Administration';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/hotel" render={props => <Hotel {...props} />} />
          <Route path="/confirmation" render={props => <Confirmation {...props} />} />
          <Route path="/administration" render={props => <Administration {...props} />} />
        </Fragment>
      </Router>
    );
  }
}