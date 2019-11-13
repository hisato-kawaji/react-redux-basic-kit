import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TestActions from '../actions/Test';
import TestDetail from '../components/TestDetail';

function mapStateToProps(state) {
  return {
    test: state.test,
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
)(TestDetail);
