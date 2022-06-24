import React from 'react';
import './layout.scss';
import MainContainer from './MainContainer';
import TheSideNav from './../app-header/TheSideNav';
import TheTopNav from './../app-header/TheTopNav';

const TheLayout = () => {
  return (
    <div className="global-container">
      <TheSideNav></TheSideNav>
      <div className="nav-header-main-content">
        <div className="navbar-header">
          <TheTopNav />
        </div>
        <div className="main-container">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
