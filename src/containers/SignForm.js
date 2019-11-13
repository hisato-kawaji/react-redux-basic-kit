import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as AuthActions from '../actions/Auth';
import SignForm from '../components/SignForm';

const selector =  formValueSelector('signForm');

function mapStateToProps(state) {
  const username = selector(state, 'username');
  const password = selector(state, 'password');
  return {
    auth: state.auth,
    signForm: {
      username,
      password,
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignForm);
