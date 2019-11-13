import { BaseApi } from './BaseAPI';

export function requestGetTestById(testId, requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    RehaApi.get('/tests/' + testId).then(
      response => dispatch(fetchedFunc(true, response.data))
    ).catch(
      err => {
        console.log(err);
        dispatch(fetchedFunc(false, err))
      }
    );
  }
}

export function requestGetTests(requestFunc, fetchedFunc, lastEvaluatedKey = null) {
  return dispatch => {
    dispatch(requestFunc());

    RehaApi.get('/tests').then(
      response => {
        dispatch(fetchedFunc(true, response.data));
      }
    ).catch(
      err => {
        console.log(err);
        dispatch(fetchedFunc(false, err))
      }
    );
  }
}

export function requestCreateTest(body, requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    RehaApi.post('/tests', body).then(
      response => dispatch(fetchedFunc(true, response.data))
    ).catch(
      err => {
        console.log(err);
        dispatch(fetchedFunc(false, err))
      }
    );
  }
}

export function requestUpdateTest(testId, body, requestFunc, fetchedFunc) {
  return dispatch => {
    dispatch(requestFunc());

    RehaApi.patch('/tests/' + testId, body).then(
      response => dispatch(fetchedFunc(true, response.data))
    ).catch(
      err => {
        console.log(err);
        dispatch(fetchedFunc(false, err))
      }
    );
  }
}

