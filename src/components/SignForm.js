import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { RaisedButton} from 'material-ui';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';


class SignForm extends Component {

  handleSubmit = () => {
    this.props.authActions.signIn(
      this.props.signForm.username,
      this.props.signForm.password
    );
  }

  componentDidMount = () => {
    this.refs.username
      .getRenderedComponent()
      .getRenderedComponent()
      .focus();
  }

  render() {
    const required = value => (value == null ? 'Required' : undefined);
    const wellStyles = {maxWidth: 600, margin: '0 auto 10px'};

    return (
      <form style={wellStyles} >
        <div>
          <Field
            name="username"
            component={TextField}
            hintText="Account Name"
            floatingLabelText="Account Name"
            validate={required}
            ref="username"
            withRef
          />
        </div>
        <div>
          <Field
            name="password"
            component={TextField}
            type="password"
            hintText="Password"
            floatingLabelText="Password"
            validate={required}
            ref="pasword"
            withRef
          />
        </div>
        <div>
          <RaisedButton label="Sign In" type="button" onClick={() => this.handleSubmit()} />
          <RaisedButton label="Clear" type="button" />
        </div>
      </form>
    );
  }
}

SignForm.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired,
  signForm: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'signForm'
})(SignForm);
