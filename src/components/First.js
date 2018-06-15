import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class First extends Component {

  render() {
    return (
      <div id='first'>
        <h1>This is the first page</h1>
        <p>This is the name, {this.props.name}</p>
        <Link to="/">Go to the Home Page</Link>
        <br />
        <Link to='/second'>Click to go to Second</Link><br/>
      </div>
    );
  }
}
