import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as TestActions from '../actions/Test';
import TestUpdateForm from '../components/TestUpdateForm';

const selector = formValueSelector('testUpdateForm');

function mapStateToProps(state) {
  const email = selector(state, 'email');
  const name = selector(state, 'name');
  const username = selector(state, 'username');
  const company = selector(state, 'company');
  const admin = selector(state, 'admin');
  const mi_code = selector(state, 'mi_code');
  const cb_code = selector(state, 'cb_code');
  return {
    test: state.test,
    initialValues: state.test.test,
    testUpdateForm: {
      email,
      name,
      username,
      company,
      admin,
      mi_code,
      cb_code,
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    testActions: bindActionCreators(TestActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestUpdateForm);
