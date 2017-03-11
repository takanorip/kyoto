import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Header from './pages/header';
import Home from './pages/home';
import Mission from './pages/mission';
import AllLinks from './pages/alllinks';
import Schedule from './pages/schedule';

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={Home} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/mission" component={Mission} />
            <Route path="/alllinks" component={AllLinks} />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
