import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Repository } from '../pages/Repository/Repository';

export const Routes = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Repository} path="/repositories" />
    </Switch>
  );
};
