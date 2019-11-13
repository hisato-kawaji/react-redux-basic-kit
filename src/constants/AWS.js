import { SES, CognitoIdentityServiceProvider, Config, CognitoIdentityCredentials } from "aws-sdk";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";

Config.region = process.env.REACT_APP_AWS_REGION;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
});

const authenticationDetail = (username, password) => {
  return new AuthenticationDetails({
    Username: username,
    Password: password,
  });
}

const userPool = () => {
  return new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
    ClientId: process.env.REACT_APP_AWS_USER_CLIENT_ID,
  });
};

const cognitoUser = (username) => {
  return new CognitoUser({
    Username: username,
    Pool: userPool(),
  });
};

const cognitoIdpURL = 'cognito-idp.' + process.env.REACT_APP_AWS_REGION
  + '.amazonaws.com/' + process.env.REACT_APP_AWS_USER_POOL_ID;

const testPool = new CognitoUserPool({
  UserPoolId: process.env.REACT_APP_AWS_BASE_POOL_ID,
  ClientId: process.env.REACT_APP_AWS_BASE_CLIENT_ID,
});

// TODO: credentialには管理画面のログインのcredentialで形成してあげたい
const testCognitoIdp = new CognitoIdentityServiceProvider({
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_BASE_POOL_CREATE_IAM_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_BASE_POOL_CREATE_IAM_SECRET,
});

const testCognitoIdpConfirm = (username, dispatcher, fetchedFunc) => {
  let Idp = testCognitoIdp;
  Idp.adminConfirmSignUp({
    UserPoolId: process.env.REACT_APP_AWS_BASE_POOL_ID,
    Username: username,
  }, (err, data) => {
    if (err) {
      dispatcher(fetchedFunc(false, err));
    } else {
      dispatcher(fetchedFunc(true, data));
    }
  });
};

const testCognitoIdpUpdate = (username, attributes, dispatcher, fetchedFunc) => {
  let Idp = testCognitoIdp;
  Idp.adminUpdateUserAttributes({
    UserPoolId: process.env.REACT_APP_AWS_BASE_POOL_ID,
    Username: username,
    UserAttributes: attributes
  }, (err, data) => {
    if (err) {
      dispatcher(fetchedFunc(false, err));
    } else {
      dispatcher(fetchedFunc(true, data));
    }
  });
};

const awsSES = new SES({
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_AWS_BASE_POOL_CREATE_IAM_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_BASE_POOL_CREATE_IAM_SECRET,
});

export {
  Config,
  userPool,
  cognitoUser,
  authenticationDetail,
  cognitoIdpURL,
  testPool,
  testCognitoIdpConfirm,
  testCognitoIdpUpdate,
  awsSES,
}

