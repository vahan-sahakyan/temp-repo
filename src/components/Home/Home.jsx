import React, { useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import Dashboard from './Dashboard';
import AnalysisOverview from './AnalysisOverview';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const onNavTabClick = key => {
    setSelectedTab(key);
  };

  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />}
    </Sticky>
  );

  return (
    <div className="main-content_scroll">
      <div className="main-content">
        <div className="fixed-panel">
          <header className="main-content_header">
            <h3 className="main-content_title">Home</h3>
          </header>
        </div>
        <StickyContainer>
          <Tabs defaultActiveKey="1" onChange={onNavTabClick} renderTabBar={renderTabBar}>
            <TabPane tab="Dashboard" key="1">
              <div className="tab-content">
                <Dashboard />
              </div>
            </TabPane>
            <TabPane tab="Analysis Overview" key="2">
              <div className="tab-content">
                <AnalysisOverview />
              </div>
            </TabPane>
          </Tabs>
        </StickyContainer>
      </div>
    </div>
  );
};

export default Home;
