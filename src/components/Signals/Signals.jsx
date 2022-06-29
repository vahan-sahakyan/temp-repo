import React, { useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import Tab3 from './Tab3';
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import MockContent from '../mock-content';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Signals = () => {
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
            <h3 className="main-content_title">Signals</h3>
          </header>
        </div>
        <section style={{ backgroundColor: 'white', padding: '2em' }} className="signals">
          <MockContent name="Signals" />
        </section>
        {/* <StickyContainer>
          <Tabs defaultActiveKey="1" onChange={onNavTabClick} renderTabBar={renderTabBar}>
            <TabPane tab="Project List" key="1">
              <div className="tab-content">
                <Tab1 />
              </div>
            </TabPane>
            <TabPane tab="Closed / Refuted Reports" key="2">
              <div className="tab-content">
                <Tab2 />
              </div>
            </TabPane>
            <TabPane tab="Approved Reports" key="3">
              <div className="tab-content">
                <Tab3 />
              </div>
            </TabPane>
          </Tabs>
        </StickyContainer> */}
      </div>
    </div>
  );
};

export default Signals;
