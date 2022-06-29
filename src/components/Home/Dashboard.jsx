import React from 'react';
import Table from '../table/Table';

const Dashboard = () => {
  return (
    <section className="dashboard">
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
      <div className="all-tables">
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </section>
  );
};

export default Dashboard;
