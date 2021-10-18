import React from 'react';
import { Switch, Route } from 'react-router';

import Listing from './components/Listing/Listing';
import Details from './components/Details/Details';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listing} />
      <Route path="/business/:id" component={Details} />
    </Switch>
  )
}

export default Router;