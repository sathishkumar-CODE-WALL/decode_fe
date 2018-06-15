import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Fourth extends Component {

  render() {
    return (
      <div id='fourth'>
        <h1>This is the fourth page</h1>
        <Link to="/">Go to the Home Page</Link>
        <br/>
        <Link to='/first'>Click to go to First</Link><br/>
      </div>
    );
  }
}
