import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect, Route} from 'react-router-dom';

export default class Auth extends Component {

  render() {
    return (
      this.props.auth.isAuthenticated ?
        ( this.props.auth.isSigningIn ? (
          <div>
            <Route children={this.props.children} />
            <Redirect to='/tests/list' />
          </div>
        ) : (
          <Route children={this.props.children} />
        ) )
        : (
          <Redirect to='/' />
      )
    )
  }
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
};

