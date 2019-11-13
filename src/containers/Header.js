import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../actions/Auth';
import * as ToggleActions from '../actions/Toggle';
import Header from '../components/common/Header';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    toggle: state.toggle,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
    toggleActions: bindActionCreators(ToggleActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
