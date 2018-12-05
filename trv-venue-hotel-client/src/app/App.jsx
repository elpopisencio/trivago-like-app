import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Header from './header/Header';
import Home from './home/Home';
import Hotel from './hotel/Hotel';
import Confirmation from './confirmation/Confirmation';
import Administration from './administration/Administration';
import NewHotel from './administration/newHotel/NewHotel';

const theme = {
  'background-color': '#e4e6e7',
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
        <Fragment>

          <Header />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/hotel/:id" render={props => <Hotel {...props} />} />
          <Route path="/confirmation/:id" render={props => <Confirmation {...props} />} />
          <Route path="/administration/new-hotel" render={props => <NewHotel {...props} />} />
          <Route path="/administration" render={props => <Administration {...props} />} />
          
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}