import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { parse } from 'qs';
import { reduxForm } from 'redux-form';
import { testField } from './TestField'
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

class TestUpdateForm extends Component {

  componentWillMount = () => {
    const query = parse(this.props.location.search.substr(1));
    this.props.testActions.get(query.id);
  }

  attribute = (key, val) => {
    return new CognitoUserAttribute({
      "Name": key,
      "Value": val,
    });
  }

  handleSubmit = () => {
    this.props.testActions.updateDynamoDB(
      this.props.test.test.id,
      {
        "email": this.props.testUpdateForm.email,
        "name": this.props.testUpdateForm.name,
      }
    );
  }

  componentDidUpdate = () => {
    if (this.props.test.Updating === true
      && this.props.test.DynamoDBUpdated === true
      && this.props.test.CognitoUpdating === false ) {
      this.props.testActions.updateCognito(
        this.props.test.test.username,
        [
          this.attribute("email", this.props.testUpdateForm.email),
          this.attribute("name", this.props.testUpdateForm.name),
        ]
      );
    }
  }

  render() {
    const testInfo = this.props.test.test;

    if (testInfo === null) {
      return (
        <div style={{position: 'relative', margin: 'auto', textAlign: 'center'}}>
          <CircularProgress size={200} thickness={15} />
        </div>
      );
    }

    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    let returnUrl = "/tests/detail?id=" + testInfo["id"];

    return (
      <form style={wellStyles} >
        {testField}
        <RaisedButton type="button" label="Update" primary={true} disabled={this.props.test.Updating} style={{margin: 12}} onClick={() => this.handleSubmit()} />
        <RaisedButton type="button" label="Return" href={returnUrl} style={{margin: 12}} />
      </form>
    );
  }
}

TestUpdateForm.propTypes = {
  test: PropTypes.object.isRequired,
  testActions: PropTypes.object.isRequired,
  testUpdateForm: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'testUpdateForm'
})(TestUpdateForm);
