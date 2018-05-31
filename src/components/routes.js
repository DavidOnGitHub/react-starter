import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard';

export const RootRoutes = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);
