import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { Layout } from 'app/Layout/Layout';
import "spectre.css";

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Layout} />
  </Switch>
));
