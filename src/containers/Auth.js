import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../actions/Auth';
import Auth from '../components/common/Auth';


function mapStateToProps(state) {
  return {
    auth: state.auth,
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
)(Auth);
