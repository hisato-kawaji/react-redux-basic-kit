import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router-dom';

export default class Header extends Component {

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
    }
  }

  handleToggle = () => {
    if (this.props.toggle.isOn) {
      this.props.toggleActions.toggleOff();
    } else {
      this.props.toggleActions.toggleOn();
    }
  }

  handleSignOut = () => {
    this.props.authActions.signOut();
  }

  render() {
    return (
      <header>
        <AppBar
          title="React Redux basic kit"
          onTitleTouchTap={() => { return (<Redirect to={'/'} />);}}
          iconElementRight={
            this.props.auth.isAuthenticated ? (
              <FlatButton label="サインアウト" />
            ) : (
              <FlatButton label="サインイン" />
            )
          }
          onLeftIconButtonTouchTap={this.handleToggle}
          onRightIconButtonTouchTap={this.handleSignOut}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.props.toggle.isOn}
          onRequestChange={this.handleToggle}
        >
          {this.props.auth.isAuthenticated ? (
            <div>
              <MenuItem key={1} href="/tests/list" >Tests</MenuItem>
              <MenuItem key={2} >Others</MenuItem>
            </div>
          ) : (
            <MenuItem>Sign In</MenuItem>
          )}
        </Drawer>
      </header>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  toggle: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
  toggleActions: PropTypes.object.isRequired,
};

