import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Third extends Component {

  render() {
    return (
      <div id='third'>
        <h1>This is the third page</h1>
        <Link to="/">Go to the Home Page</Link>
        <br/>
        <Link to='/fourth'>Click to go to Fourth</Link><br/>
      </div>
    );
  }
}
