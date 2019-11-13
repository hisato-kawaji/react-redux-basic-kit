import * as Test from '../../constants/Test';

const initialState = {
  listData: {},
  test: null,
  result: false,
  Loading: false,
  Loaded: false,
  Creating: false,
  Created: false,
  SigningUp: false,
  SignedUp: false,
  Confirming: false,
  Confirmed: false,
  Updating: false,
  Updated: false,
  DynamoDBUpdating: false,
  DynamoDBUpdated: false,
  CognitoUpdating: false,
  CognitoUpdated: false,
}

export default function test(state = initialState, action) {

  switch (action.type) {
    case Test.LOADING:
      return Object.assign({}, state, {
        Loading: true,
        Loaded: false,
      });
    case Test.LOADED:
      return Object.assign({}, state, {
        Loading: false,
        Loaded: true,
        test: action.data,
        result: action.result,
      });
    case Test.LIST_LOADING:
      return Object.assign({}, state, {
        Loading: true,
        Loaded: false,
      });
    case Test.LIST_LOADED:
      return Object.assign({}, state, {
        Loading: false,
        Loaded: true,
        listData: action.data,
        result: action.result,
      });
    case Test.SIGNING_UP:
      return Object.assign({}, state, {
        Creating: true,
        Created: false,
        SigningUp: true,
        SignedUp: false,
      });
    case Test.SIGNED_UP:
      return Object.assign({}, state, {
        SigningUp: false,
        SignedUp: true,
      });
    case Test.CONFIRMING:
      return Object.assign({}, state, {
        SignedUp: false,
        Confirming: true,
        Confirmed: false,
      });
    case Test.CONFIRMED:
      return Object.assign({}, state, {
        Creating: false,
        Created: true,
        Confirming: false,
        Confirmed: true,
      });
    case Test.DYNAMODB_UPDATING:
      return Object.assign({}, state, {
        Updating: true,
        Updated: false,
        DynamoDBUpdating: true,
        DynamoDBUpdated: false,
      });
    case Test.DYNAMODB_UPDATED:
      return Object.assign({}, state, {
        DynamoDBUpdating: false,
        DynamoDBUpdated: true,
        result: action.result,
      });
    case Test.COGNITO_UPDATING:
      return Object.assign({}, state, {
        DynamoDBUpdated: false,
        CognitoUpdating: true,
        CognitoUpdated: false,
      });
    case Test.COGNITO_UPDATED:
      return Object.assign({}, state, {
        Updating: false,
        Updated: true,
        CognitoUpdating: false,
        CognitoUpdated: true,
        result: action.result,
      });
    default:
      return state;
  }
}

