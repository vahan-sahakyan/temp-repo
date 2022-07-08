import React from 'react';
import './AnalysisOverview.scss';
import Table from '../table/Table';
import MockContent from '../mock-content';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import ChartDoughnutLabel from 'chartjs-plugin-doughnutlabel';
console.log(ChartDataLabels);
Legend.defaults.position = 'bottom';
Legend.defaults.labels.boxWidth = 15;
Legend.defaults.labels.usePointStyle = true;

ChartJS.register(ArcElement, Tooltip, Legend);

// const SAMPLE = {
//   labels: ['Not Mentioned', 'Female', 'Male', '35-45 Years', 'N/A', 'Non Serious', 'Serious'],
//   datasets: [
//     {
//       data: paddedData([12, 19, 3, 5, 2, 3]),
//       backgroundColor: ['#EC6666', '#79D2DE', '#147AD6', '#81D9DA', '#1E3BB3', '#65D471', '#FB5C5C'],
//     },
//   ],
// };
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
  const chartsContainer = {
    display: 'flex',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '2em',
    maxWidth: '100vw',
    backgroundColor: '#f5f5f5',
    padding: '2em',
  };

  const chart = {
    backgroundColor: '#fff',
    width: '30vw',
    height: 'max-content',
    // padding: '2em',
    margin: '0 auto',
  };

  return (
    <section style={{ backgroundColor: 'white', padding: '0 0' }} className="analysis-overview">
      {/* <div style={chartsContainer}> */}
      <div className="charts-container_scroll-x">
        <div className="charts-container">
          <div className="chart">
            <Doughnut data={casesByGender} {...doughnutGeneralOptions} />
          </div>
          <div className="chart">
            <Doughnut data={casesByAge} {...doughnutGeneralOptions} />
          </div>
          <div className="chart">
            <Doughnut data={casesBySeriousness} {...doughnutGeneralOptions} />
          </div>
        </div>
      </div>
      {/* </div> */}
      <MockContent name="analysis overview" />
    </section>
  );
};

export default AnalysisOverview;
