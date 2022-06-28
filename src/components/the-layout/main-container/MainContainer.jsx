import React from 'react';
import TheTopbar from '../the-topbar/TheTopbar';
import Table from '../../table/Table';
import './MainContainer.scss';
// import { Redirect, Route, Switch } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div>
          <TheTopbar />

          <header className="main-header">
            <h3 className="main-title">Home</h3>
          </header>
          <ul className="tabs-container">
            <li className="tab active_tab">Dashboard</li>
            <li className="tab">Analysis Overview</li>
            <li className="tab">Mommy Mommy</li>
            <li className="tab">Give Me Yummy</li>
          </ul>
        </div>
        {/* MAIN CONTENT -- START */}
        <div className="main-content_scroll">
          <div className="main-content">
            {/* /////////////////////////////////// */}
            {/* ///////////// DASHBOARD /////////// */}
            {/* CARDS -- START */}
            <div className="cards-container_scroll-x">
              <div className="cards-container">
                <button className="card">
                  <i className="card--icon blue fa-solid fa-file-lines"></i>
                  <span className="card--quantity">5</span>
                  <p className="card--name">Projects Created</p>
                </button>
                <button className="card card_active">
                  <i className="card--icon yellow fa-solid fa-file-lines"></i>
                  <span className="card--quantity ">6</span>
                  <p className="card--name">Projects to Review</p>
                </button>
                <button className="card">
                  <i className="card--icon black fa-solid fa-file-lines"></i>
                  <span className="card--quantity">5</span>
                  <p className="card--name">Projects for QC</p>
                </button>
                <button className="card">
                  <i className="card--icon red fa-solid fa-circle-exclamation"></i>
                  <span className="card--quantity">3</span>
                  <p className="card--name">Signals Identified</p>
                </button>
              </div>
            </div>
            {/* CARDS -- END */}

            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            {/* ///////////// DASHBOARD /////////// */}
            {/* /////////////////////////////////// */}
          </div>
        </div>
        {/* MAIN CONTENT -- END */}
      </div>
    </div>
  );
};

export default MainContainer;
