import React from 'react';
import './TheLayout.scss';
import MainContainer from './main-container/MainContainer';
import TheSidebar from './the-sidebar/TheSidebar';

const TheLayout = () => {
  return (
    <>
      <TheSidebar />
      <MainContainer />
    </>
  );
};

export default TheLayout;
