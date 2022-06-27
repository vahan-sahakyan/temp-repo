import React from 'react';
import TheTopbar from '../the-topbar/TheTopbar';
import Table from '../table/Table';
// import './MainContainer.scss';
// import { Redirect, Route, Switch } from 'react-router-dom';

const MainContainer = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <>
          <TheTopbar />

          <header className="main-header">
            <h3 className="main-title">Home</h3>
          </header>
          <ul className="tabs-container">
            <li className="tab active_tab">Dashboard</li>
            <li className="tab">Analysis Overview</li>
          </ul>
        </>
        {/* ELEM CARDS -- START */}
        <div className="scroll">
          <div className="main-wrapper">
            <div className="scroll-x">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
