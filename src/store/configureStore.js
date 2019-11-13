import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import app from './reducers/App';
import auth from './reducers/Auth';
import toggle from './reducers/Toggle';
import test from './reducers/Test';

import { reducer as formReducer } from 'redux-form'

const loggerMiddleware = createLogger;

export default function configureStore() {
  return createStore(
    combineReducers({
      app: app,
      auth: auth,
      toggle: toggle,
      test: test,
      form: formReducer,
      routing: routerReducer,
    }),
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
