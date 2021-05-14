import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import Route from './Route';

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}

export default routes;
