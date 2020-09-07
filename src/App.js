import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Liste from './components/liste';
import MonVol from './components/mon-vol';

const Main = () => {
  return (
      <Switch>
        <Route exact path='/Accueil' component={Home}></Route>
        <Route exact path='/Liste' component={Liste}></Route>
        <Route exact path='/ma-reservation' component={MonVol}></Route>
      </Switch>
  );
};

export default Main;
