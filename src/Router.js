import React from 'react';
import { Switch, Route } from 'react-router';

import Listing from './containers/Listing';
import Details from './containers/Details';
import Login from './containers/Login';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listing} />
      <Route path="/business/:id" component={Details} />
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default Router;