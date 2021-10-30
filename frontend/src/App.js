import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchDaycares } from './actions/daycareActions';
import { fetchToddlers } from './actions/toddlerActions';
import NavBar from './components/navcomp/NavBar';
import Welcome from './components/Welcome'
import DaycareFormContainer from './containers/DaycareFormContainer';
import DaycareContainer from './containers/DaycareContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchDaycares()
    this.props.fetchToddlers()
  }
  
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/daycares/toddlers/new" component={DaycareFormContainer}/>
          <Route exact path="/toddlers" component={DaycareContainer}/>
        </Switch>
      </Router>
    )
  } 
}

export default connect(null, { fetchDaycares, fetchToddlers })(App)

