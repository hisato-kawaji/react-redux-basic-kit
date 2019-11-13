export const LIST_LOADING='LIST_LOADTING';
export const LIST_LOADED='LIST_LOADED';
export const SIGNING_UP='SIGNING_UP';
export const SIGNED_UP='SIGNED_UP';
export const CONFIRMING='CONFIRMING';
export const CONFIRMED='CONFIRMED';
export const COGNITO_UPDATING='COGNITO_UPDATING';
export const COGNITO_UPDATED='COGNITO_UPDATED';
export const DYNAMODB_UPDATING='DYNAMODB_UPDATING';
export const DYNAMODB_UPDATED='DYNAMODB_UPDATED';
export const LOADING='LOADTING';
export const LOADED='LOADED';

export const Model={
  "id": "ID",
  "email": "email",
  "name": "name",
};

export const email_param = {
  Destination: {
    ToAddresses: [
      'moffsoku@moff.mobi',
    ]
  },
  Message: {
    Body: {
      Text: {
        Data: '',
        Charset: 'utf-8'
      }
    },
    Subject: {
      Data: '',
      Charset: 'utf-8'
    }
  },
  ReplyToAddresses: [
    'email@sample.com',
  ],
  ReturnPath: 'email@sample.com',
  Source: 'email@sample.com'
};
