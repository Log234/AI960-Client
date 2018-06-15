import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import LayoutContainer from 'app/Layout/LayoutContainer';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={LayoutContainer} />
  </Switch>
));
