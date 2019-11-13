import * as AWS from '../constants/AWS';

export function signUp(
  username, password, attributeList,
  requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    AWS.testPool.signUp(
      username,
      password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          dispatch(fetchedFunc(false, err));
        } else {
          dispatch(fetchedFunc(true, result));
        }
      }
    );
  }
}

export function confirm(username, requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    AWS.testCognitoIdpConfirm(username, dispatch, fetchedFunc);
  }
}

export function update(username, attributes, requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    AWS.testCognitoIdpUpdate(username, attributes, dispatch, fetchedFunc);
  }
}
