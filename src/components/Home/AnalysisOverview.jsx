import React from 'react';
import './AnalysisOverview.scss';
import Table from '../table/Table';
import MockContent from '../mock-content';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DemoLine from './trend-chart';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import ChartDoughnutLabel from 'chartjs-plugin-doughnutlabel';

import { Select } from 'antd';
const { Option } = Select;

console.log(ChartDataLabels);
Legend.defaults.position = 'bottom';
Legend.defaults.labels.boxWidth = 15;
Legend.defaults.labels.usePointStyle = true;

ChartJS.register(ArcElement, Tooltip, Legend);

const paddedData = arr => arr.map(num => (num > 9 ? num : ` ${num} `));
const casesByGender = {
  labels: ['Male', 'Female', 'Not Mentioned'],
  datasets: [
    {
      // label: '# of Votes',
      data: paddedData([5, 4, 1]),
      backgroundColor: ['#147AD6', '#79D2DE', '#EC6666'],
    },
  ],
};
const casesByAge = {
  labels: ['N/A', '35-45 Years'],
  datasets: [
    {
      // label: '# of Votes',
      data: paddedData([8, 6]),
      backgroundColor: ['#1E3BB3', '#81D9DA'],
    },
  ],
};
const casesBySeriousness = {
  labels: ['Non Serious', 'Serious'],
  datasets: [
    {
      // label: '# of Votes',
      data: paddedData([53, 86]),
      backgroundColor: ['#65D471', '#FB5C5C'],
    },
  ],
};
const doughnutGeneralOptions = {
  plugins: [
    ChartDataLabels,
    //  ChartDoughnutLabel
  ],
  options: {
    // OLD
    responsive: true,
    tooltip: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: true,
        backgroundColor: '#fff',

        borderColor: '#aaa3',
        borderRadius: 50,
        borderWidth: 2,

        anchor: 'end',
        align: 'center',
        color: '#333',
        padding: '10',
        font: {
          weight: 'normal',
          size: '15',
        },
      },
      // Inner info
      doughnutlabel: {
        labels: [
          {
            text: '550',
            font: {
              size: 20,
              weight: 'bold',
            },
          },
          {
            text: 'total',
          },
        ],
      },
    },
  },
};

const AnalysisOverview = () => {
  const drugs = ['Abilify', 'Abatacept', 'Metformin'];
  const events = ['Diziness', 'Asthma', 'Arthralgia'];
  return (
    <section style={{ backgroundColor: 'white', padding: '0 0' }} className="analysis-overview">
      <div style={{ backgroundColor: '#f5f5fa' }} className="donuts-container_scroll-x">
        <div style={{ padding: '1.5em 2em' }} className="donut-selects-container">
          <div className="donut-select">
            <span>Drug</span>
            <Select allowClear placeholder="Drug" style={{ width: 200 }}>
              {drugs.map(drug => (
                <Option value={drug}>{drug}</Option>
              ))}
            </Select>
          </div>
          <div className="donut-select">
            <span>Event</span>
            <Select placeholder="Event" style={{ width: 200 }}>
              {events.map(event => (
                <Option value={event}>{event}</Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="donuts-container">
          <div className="donut">
            <Doughnut data={casesByGender} {...doughnutGeneralOptions} />
          </div>
          <div className="donut">
            <Doughnut data={casesByAge} {...doughnutGeneralOptions} />
          </div>
          <div className="donut">
            <Doughnut data={casesBySeriousness} {...doughnutGeneralOptions} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff' }} className="trend-container">
        <div className="trend-info">
          <h1>Trend Analysis</h1>
        </div>

        <div className="trend">
          <DemoLine />
        </div>
      </div>
      {/* <MockContent name="analysis overview" /> */}
    </section>
  );
};

export default AnalysisOverview;
