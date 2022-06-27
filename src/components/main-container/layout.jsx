import React from 'react';
import './layout.scss';
import MainContainer from './MainContainer';
import TheSidebar from '../the-sidebar/TheSidebar';

const TheLayout = () => {
  return (
    <>
      <TheSidebar />
      <MainContainer />
    </>
  );
};

export default TheLayout;
