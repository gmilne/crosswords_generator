import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CrosswordHome from './components/CrosswordHome';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
    <Route exact path="/crossword" component={CrosswordHome}/>
  </Switch>
);

export default Routes;