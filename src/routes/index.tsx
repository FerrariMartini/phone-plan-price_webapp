import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Simulation from '../pages/Simulation/simulation';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Simulation} />
  </Switch>
);

export default Routes;
