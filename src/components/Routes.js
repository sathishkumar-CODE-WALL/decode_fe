import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './styles.css'

import Home from './Home'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className='pageOutline'>
          <Route>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/first" component={() => <First name="Clay" />}/>
              <Route path="/second" component={()=> <Second name="Rolly" />}/>
              <Route path="/third" component={Third}/>
              <Route path="/fourth" component={Fourth}/>
            </div>
          </Route>
        </div>
      </Router>
    )
  }
}
