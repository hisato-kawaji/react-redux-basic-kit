import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm  } from 'redux-form';
import { testField } from './TestField'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import * as AWS from '../constants/AWS';
import * as TestConst from '../constants/Test';

class TestCreateForm extends Component {

  attribute = (key, val) => {
    return new CognitoUserAttribute({
      "Name": key,
      "Value": val,
    });
  }

  handleSubmit = () => {
    let l = 8;
    let c = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cl = c.length;
    var newPassword = "";
    for(var i=0; i<l; i++){
      newPassword += c[Math.floor(Math.random()*cl)];
    }
    this.props.testActions.signUp(
      this.props.testCreateForm.username,
      newPassword,
      [
        this.attribute("email", this.props.testCreateForm.email),
        this.attribute("name", this.props.testCreateForm.name),
      ]
    );
    var params = TestConst.email_param;
    params['Message']['Subject']['Data'] = 'registered';
    params['Message']['Body']['Text']['Data'] = `info:
login: ${this.props.testCreateForm.username}
password: ${newPassword}
email: ${this.props.testCreateForm.email}
name: ${this.props.testCreateForm.name}
    `;
    AWS.awsSES.sendEmail(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else     console.log(data);
    })
  }

  componentDidUpdate = () => {
    if (this.props.test.Creating === true
      && this.props.test.SignedUp === true
      && this.props.test.Confirming === false ) {
      this.props.testActions.confirm(
        this.props.testCreateForm.username
      );
    }
  }

  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

    return (
      <form style={wellStyles} >
        {testField}
        <RaisedButton type="button" label="Create" disabled={this.props.test.Creating} primary={true} style={{margin: 12}} onClick={() => this.handleSubmit()} />
        <RaisedButton type="button" label="Return" href="/tests/list" style={{margin: 12}} />
      </form>
    );
  }
}

TestCreateForm.propTypes = {
  test: PropTypes.object.isRequired,
  testActions: PropTypes.object.isRequired,
  testCreateForm: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'testCreateForm'
})(TestCreateForm);
