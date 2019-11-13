import * as Test from '../constants/Test';
import * as TestAPI from '../api/Test';
import * as TestCognito from '../api/TestCognito';


export function signUp(username, password, attributeList) {
  return TestCognito.signUp(
    username,
    password,
    attributeList,
    () => {
      return {
        type: Test.SIGNING_UP,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.SIGNED_UP,
          result: result,
          data: data,
        };
      } else {
        return {
          type: Test.SIGNED_UP,
          result: result,
          err: data,
        };
      }
    }
  );
}

export function confirm(username) {
  return TestCognito.confirm(
    username,
    () => {
      return {
        type: Test.CONFIRMING,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.CONFIRMED,
          result: result,
          data: data,
        };
      } else {
        return {
          type: Test.CONFIRMED,
          result: result,
          err: data,
        };
      }
    }
  );
}

export function updateDynamoDB(testId, body) {
  return TestAPI.requestUpdateTest(
    testId,
    body,
    () => {
      return {
        type: Test.DYNAMODB_UPDATING,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.DYNAMODB_UPDATED,
          result: result,
          data: data,
        };
      } else {
        return {
          type: Test.DYNAMODB_UPDATED,
          result: result,
          err: data,
        };
      }
    }
  );
}

export function updateCognito(username, attributes) {
  return TestCognito.update(
    username,
    attributes,
    () => {
      return {
        type: Test.COGNITO_UPDATING,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.COGNITO_UPDATED,
          result: result,
          data: data,
        };
      } else {
        return {
          type: Test.COGNITO_UPDATED,
          result: result,
          err: data,
        };
      }
    }
  );
}
export function loadList(lastEvaluatedKey = null) {
  return TestAPI.requestGetTests(
    () => {
      return {
        type: Test.LIST_LOADING,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.LIST_LOADED,
          result: result,
          data: data['Items'].sort((a, b) => a.id > b.id),
        };
      } else {
        return {
          type: Test.LIST_LOADED,
          result: result,
          err: data,
        };
      }
    },
    lastEvaluatedKey
  );
}

export function get(testId) {
  return TestAPI.requestGetTestById(
    testId,
    () => {
      return {
        type: Test.LOADING,
      };
    },
    (result, data) => {
      if (result) {
        return {
          type: Test.LOADED,
          result: result,
          data: data,
        };
      } else {
        return {
          type: Test.LOADED,
          result: result,
          err: data,
        };
      }
    }
  );
}
