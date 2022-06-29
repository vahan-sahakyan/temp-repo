// import { Tabs } from 'antd';
import React, { useState } from 'react';
import Table from '../../table/Table';
import Home from '../../Home/Home';
import Projects from '../../Projects/Projects';
import './MainContainer.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Tabs } from 'antd';
import { Sticky, StickyContainer } from 'react-sticky';
import Signals from '../../Signals/Signals';
import DrugEventCombination from '../../DrugEventCombination/DrugEventCombination';
const { TabPane } = Tabs;

const MainContainer = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/signals" component={Signals} />
        <Route path="/drug-event-combination" component={DrugEventCombination} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default MainContainer;
