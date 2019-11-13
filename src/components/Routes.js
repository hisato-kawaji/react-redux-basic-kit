import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TestList from '../containers/TestList';
import TestDetail from '../containers/TestDetail';
import TestCreateForm from '../containers/TestCreateForm';
import TestUpdateForm from '../containers/TestUpdateForm';


export default class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/test/list" component={TestList} />
          <Route path="/test/detail" component={TestDetail} />
          <Route path="/test/create" component={TestCreateForm} />
          <Route path="/test/update" component={TestUpdateForm} />
        </Switch>
      </div>
    );
  }
}

