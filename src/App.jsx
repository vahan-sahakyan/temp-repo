import React from 'react';
import TheLayout from './components/the-layout/TheLayout';
import Login from './components/Login/Login';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="global-container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <TheLayout />
      </Switch>
    </div>
  );
}

export default App;
