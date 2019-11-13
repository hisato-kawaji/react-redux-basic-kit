import { CognitoIdentityCredentials } from "aws-sdk";
import * as AWS from '../constants/AWS';
import * as Auth from '../constants/Auth';

export function requestSignIn(
  username, password,
  requestFunc, fetchedFunc) {

  return dispatch => {
    dispatch(requestFunc());
    let cognitoUser = AWS.cognitoUser(username);
    cognitoUser.authenticateUser(
      AWS.authenticationDetail(username, password), {
        onSuccess: result => {
          cognitoUser.cacheTokens();
          dispatch(fetchedFunc(Auth.SIGN_IN_STATUS_REDIRECTING));
          dispatch(fetchedFunc(Auth.SIGN_IN_STATUS_SUCCESS));
        },
        onFailure: err => {
          dispatch(fetchedFunc(false, err));
        },
      }
    );
  }
}

export function requestGetSession(requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    let userPool = AWS.userPool();
    let cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, result) {
        let loginObject = {};
        loginObject[AWS.cognitoIdpURL] = result.getIdToken().getJwtToken();
        AWS.Config.region = process.env.REACT_APP_AWS_REGION;
        AWS.Config.credential = new CognitoIdentityCredentials({
          IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
          Logins : loginObject,
        });

        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', loginObject[AWS.cognitoIdpURL]);
        }

        if (err) {
          dispatch(fetchedFunc(false, err));
        } else {
          dispatch(fetchedFunc(true));
        }
      });
    } else {
      dispatch(fetchedFunc(false, 'User is not signed-in'));
    }
  }
}

export function requestSignOut(requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    let userPool = AWS.userPool();
    let cognitoUser = userPool.getCurrentUser();
    localStorage.removeItem('token');
    if (cognitoUser != null) {
      cognitoUser.signOut();

      dispatch(fetchedFunc(true));
    } else {
      dispatch(fetchedFunc(true));
    }
  }
}

