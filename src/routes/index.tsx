import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard/Dashboard';
// import { Repository } from '../pages/Repository/Repository';

const Dashboard = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboard" */ '../pages/Dashboard/Dashboard'
    ),
);
const Repository = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repository" */ '../pages/Repository/Repository'
    ),
);

export const Routes = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={'loading'}>
          <Route component={Dashboard} path="/" exact />

          <Route component={Repository} path="/repositories/:repository+" />
        </Suspense>
      </Switch>
    </>
  );
};
