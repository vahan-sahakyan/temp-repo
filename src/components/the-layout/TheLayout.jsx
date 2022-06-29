import React from 'react';
import './TheLayout.scss';
import MainContainer from './main-container/MainContainer';
import TheSidebar from './the-sidebar/TheSidebar';
import TheTopbar from './the-topbar/TheTopbar';

const TheLayout = () => {
  return (
    <>
      <TheSidebar />
      <TheTopbar />
      <MainContainer />
    </>
  );
};

export default TheLayout;
