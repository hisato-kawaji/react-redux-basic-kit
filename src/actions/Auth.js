import * as Auth from '../constants/Auth';
import * as AuthAPI from '../api/Auth';

export function signIn(username, password) {
  return AuthAPI.requestSignIn(
    username,
    password,
    () => {
      return {
        type: Auth.PROCESS_SIGN_IN,
      }
    },
    (result, err) => {
      switch(result) {
        case Auth.SIGN_IN_STATUS_REDIRECTING:
          return {
            type: Auth.DONE_SIGN_IN,
            isAuthenticated: true,
            isSigningIn: true,
            result: true,
          }
        case Auth.SIGN_IN_STATUS_SUCCESS:
          return {
            type: Auth.DONE_SIGN_IN,
            isAuthenticated: true,
            isSigningIn: false,
            result: true,
          }
        default:
          return {
            type: Auth.DONE_SIGN_IN,
            username: username,
            isAuthenticated: false,
            error: err,
            result: result,
          }
      }
    }
  );
}

export function getSession() {
  return AuthAPI.requestGetSession(
    () => {
      return {
        type: Auth.PROCESS_GET_SESSION,
      }
    },
    (result, err) => {
      if (result) {
        return {
          type: Auth.DONE_GET_SESSION,
          isAuthenticated: true,
          result: result,
        }
      } else {
        return {
          type: Auth.DONE_GET_SESSION,
          isAuthenticated: false,
          err: err,
          result: result,
        }
      }
    }
  );
}

export function signOut() {
  return AuthAPI.requestSignOut(
    () => {
      return {
        type: Auth.PROCESS_SIGN_OUT,
      }
    },
    (result) => {
      if (result) {
        return {
          type: Auth.DONE_SIGN_OUT,
          isAuthenticated: false,
          result: result,
        }
      } else {
        return {
          type: Auth.DONE_SIGN_OUT,
          isAuthenticated: false,
          result: result,
        }
      }
    }
  );
}

export function signUp(userInfo) {
  return {
    type: Auth.SIGN_UP,
    userInfo,
  }
}
