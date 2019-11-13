import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Header from '../containers/Header'
import Layout from './common/Layout'
import Footer from './common/Footer'

import Auth from '../containers/Auth';
import SignForm from '../containers/SignForm';

import Routes from './Routes';


const signForm = () => {
  return (
    <div>
      <SignForm />
    </div>
  );
}

export default class App extends Component {

  componentWillMount = () => {
    this.props.authActions.getSession();
  }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          <div>
            <Header />
            <Auth>
              <Switch>
                <Route path="/" component={Routes} />
              </Switch>
            </Auth>
            <Switch>
              <Route exact path="/" component={signForm} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Layout>
    );
  }
}


App.propTypes = {
  authActions: PropTypes.object.isRequired,
};
