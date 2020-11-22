import React, { Component } from "react";
import { Root } from "@mui-treasury/layout";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";

import Nav from '../Nav/Nav';
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
    <Root>
    <CssBaseline />
      <Nav/>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        {/* <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} /> */}
      </Switch>
    </Root>
  );
};
};
export default App;