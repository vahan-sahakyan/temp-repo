import React from 'react';
// import Dashboard from './components/dashboard/Dashboard';
// import Home from './components/Home/Home';
// import Signals from './components/Signals/Signals';
// import SignalProjectMain from './components/SignalProject/SignalProjectMain';
// import Admin from './components/admin/Admin';
// import Report from './components/SignalProject/Report'
// import About from './components/about/About';
// import RunResultsMain from './components/Run-Results/RunResultsMain'
// import ReportsNReview from './components/ReportsNReview/ReportsNReview'
// import ReviewnEvaluation from './components/ReportsNReview/ReviewnEvaluation'
// import SignalMonitoring from './components/SignalMonitoring/SignalMonitoring'
// import QualitativeEstimationMain from './components/QualitativeEstimation/QualitativeEstimationMain';

// const routes = [
//   { path: '/', exact: true, name: 'Home' },
//   { path: '/dashboard', name: 'Dashboard', component: Dashboard },
//   { path: '/home', name: 'Home', component: Home },
//   { path: '/admin', name: 'Admin', component: Admin },
//   { path: '/about', name: 'About', component: About },
//   { path: '/signal', name: 'Signal', component: Signals },
//   { path: '/signal-project', exact: true, name: 'SignalProjectMain', component: SignalProjectMain },
//   { path: '/signal-project/:id', exact: true, name: 'Report', component: Report },
//   { path: '/run-results', exact: true, name: 'RunResult', component: RunResultsMain },
//   { path: '/run-results/:id', exact: true, name: 'RunResult', component: Report },
//   { path: '/reportnreview', exact: true, name: 'ReportNReview', component: ReportsNReview },
//   { path: '/reportnreview/:id', exact: true, name: 'RunResult', component: Report },
//   { path: '/signalReview', exact: true, name: 'Signal Review', component: ReviewnEvaluation },
//   { path: '/signalMonitoring', exact: true, name: 'Signal Monitoring', component: SignalMonitoring },
//   {
//     path: '/qualitative-estimation',
//     exact: true,
//     name: 'Qualitative Estimation',
//     component: QualitativeEstimationMain,
//   },
// ];

// export default routes;

import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Signals from './components/Signals/Signals';
import SignalProjectMain from './components/SignalProject/SignalProjectMain';
import Admin from './components/admin/Admin';
import Report from './components/SignalProject/Report';
import About from './components/about/About';
import RunResultsMain from './components/Run-Results/RunResultsMain';
import ReportsNReview from './components/ReportsNReview/ReportsNReview';
import ReviewnEvaluation from './components/ReportsNReview/ReviewnEvaluation';
import SignalMonitoring from './components/SignalMonitoring/SignalMonitoring';
import QualitativeEstimationMain from './components/QualitativeEstimation/QualitativeEstimationMain';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/home', name: 'Home', component: Home },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/about', name: 'About', component: About },
  { path: '/signal', name: 'Signal', component: Signals },
  { path: '/signal-project', exact: true, name: 'SignalProjectMain', component: SignalProjectMain },
  { path: '/signal-project/:id', exact: true, name: 'Report', component: Report },
  { path: '/run-results', exact: true, name: 'RunResult', component: RunResultsMain },
  { path: '/run-results/:id', exact: true, name: 'RunResult', component: Report },
  { path: '/reportnreview', exact: true, name: 'ReportNReview', component: ReportsNReview },
  { path: '/reportnreview/:id', exact: true, name: 'RunResult', component: Report },
  { path: '/signalReview', exact: true, name: 'Signal Review', component: ReviewnEvaluation },
  { path: '/signalMonitoring', exact: true, name: 'Signal Monitoring', component: SignalMonitoring },
  {
    path: '/qualitative-estimation',
    exact: true,
    name: 'Qualitative Estimation',
    component: QualitativeEstimationMain,
  },
];

export default routes;
