// import { Tabs } from 'antd';
import React from 'react';
import Home from '../../Home/Home';
import Projects from '../../Projects/Projects';
import './MainContainer.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signals from '../../Signals/Signals';
import AdminSettings from '../../admin-settings/AdminSettings';
// import DrugEventCombination from '../../DrugEventCombination/DrugEventCombination';

const MainContainer = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/signals" component={Signals} />
        <Route exact path="/admin-settings" component={AdminSettings} />
        {/* <Route path="/drug-event-combination" component={DrugEventCombination} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default MainContainer;
