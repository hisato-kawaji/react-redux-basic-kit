import * as Auth from '../../constants/Auth';

const initialState = {
  isAuthenticated: false,
  isSigningIn: false,
  userName: '',
  err: '',
  lastSignedIn: null,
  Loading: false,
  Loaded: false,
  Result: false,
}

export default function auth(state = initialState, action) {

  switch (action.type) {
    case Auth.PROCESS_SIGN_IN:
      return Object.assign({}, state, {
        Loading: true,
        Loaded: false,
        Result: null,
      });
    case Auth.DONE_SIGN_IN:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        userName: action.username,
        isSigningIn: action.isSigningIn,
        err: action.err,
        Loading: false,
        Loaded: true,
        Result: action.result,
      });
    case Auth.PROCESS_SIGN_OUT:
      return Object.assign({}, state, {
        Loading: true,
        Loaded: false,
        Result: action.result,
      });
    case Auth.DONE_SIGN_OUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        userName: '',
        err: '',
        Loading: false,
        Loaded: true,
        Result: action.result,
      });
    case Auth.PROCESS_GET_SESSION:
      return Object.assign({}, state, {
        Loading: true,
        Loaded: false,
        Result: action.result,
      });
    case Auth.DONE_GET_SESSION:
      return Object.assign({}, state, {
        isAuthenticated: action.isAuthenticated,
        userName: '',
        err: action.err,
        Loading: false,
        Loaded: true,
        Result: action.result,
      });
    default:
      return state;
  }
}

