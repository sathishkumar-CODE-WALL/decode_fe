import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Second extends Component {

  render() {
    return (
      <div id='second'>
        <h1>This is the second page</h1>
        <p>This is the name, {this.props.name}</p>
        <Link to="/">Go to the Home Page</Link>
        <br/>
        <Link to='/third'>Click to go to Third</Link><br/>
      </div>
    );
  }
}
