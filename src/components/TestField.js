import React from 'react';
import { TextField } from 'redux-form-material-ui';
import * as Test from '../constants/Test';
import { Field } from 'redux-form';

const required = value => (value == null ? 'Required' : undefined);

export const testField = Object.keys(Test.Model).map((key) => {
  if (key !== "id") {
    return (
      <div key={key}>
        <Field
          key={key}
          name={key}
          component={TextField}
          hintText={Test.Model[key]}
          floatingLabelText={Test.Model[key]}
          validate={required}
        />
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
});
