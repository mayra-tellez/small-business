import React from 'react';
import { Switch, Route } from 'react-router';

import Listing from './components/Listing/Listing';
import Details from './components/Details/Details';
import Login from './components/Login/Login';

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