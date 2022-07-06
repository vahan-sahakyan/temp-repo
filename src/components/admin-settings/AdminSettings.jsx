import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import './AdminSettings.scss';
import MockContent, { MockSample } from '../mock-content';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

// const AdminSettings = () => {
//   const [tabPosition, setTabPosition] = useState('left');

//   return (
//     <div>
//       <Tabs tabPosition={tabPosition}>
//         <TabPane tab="Tab 1" key="1">
//           Content of Tab 1
//         </TabPane>
//         <TabPane tab="Tab 2" key="2">
//           Content of Tab 2
//         </TabPane>
//         <TabPane tab="Tab 3" key="3">
//           Content of Tab 3
//         </TabPane>
//       </Tabs>
//     </div>
//   );
// };
const AdminSettings = () => {
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
    <div className="admin-settings">
      <div className="main-content_scroll">
        <div className="main-content">
          <div className="fixed-panel">
            <header className="main-content_header">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="chevron-left"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h3 className="main-content_title">Admin Settings</h3>
            </header>
          </div>
          <StickyContainer>
            <Tabs defaultActiveKey="1" onChange={onNavTabClick} renderTabBar={renderTabBar}>
              <TabPane tab="General Settings" key="1">
                <div className="tab-content">
                  {/* <Tab1 /> */}
                  <h2>General Settings</h2>
                  {/* <h1>General Settings</h1> */}
                </div>
              </TabPane>
              <TabPane tab="Drug Profile" key="2">
                <div className="tab-content">
                  {/* <Tab2 /> */}
                  <h2>Drug Profile</h2>
                </div>
              </TabPane>
              <TabPane tab="Access Management" key="3">
                <div className="tab-content">
                  {/* <Tab3 /> */}
                  <h2>Access Management</h2>
                </div>
              </TabPane>
              <TabPane tab="Report Configuration" key="4">
                <div className="tab-content">
                  {/* <Tab3 /> */}
                  <h2>Report Configuration</h2>
                </div>
              </TabPane>
              <TabPane tab="Database Settings" key="5">
                <div className="tab-content">
                  {/* <Tab3 /> */}

                  <h2>Database Settings</h2>
                </div>
              </TabPane>
            </Tabs>
          </StickyContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
