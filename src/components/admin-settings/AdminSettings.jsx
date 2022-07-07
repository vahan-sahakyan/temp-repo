import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import './AdminSettings.scss';
import MockContent, { MockSample } from '../mock-content';
import { Link, useHistory } from 'react-router-dom';
const { TabPane } = Tabs;

const AdminSettings = () => {
  const history = useHistory();
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
              <div style={{ cursor: 'pointer' }} onClick={history.goBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="chevron-left"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <h3 className="main-content_title">Admin Settings</h3>
            </header>
          </div>
          <StickyContainer>
            <Tabs defaultActiveKey="1" onChange={onNavTabClick} renderTabBar={renderTabBar}>
              <TabPane tab="General Settings" key="1">
                <div className="tab-content">
                  {/* <Tab1 /> */}
                  <h2>General Settings</h2>
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
                  {/* <Tab4 /> */}
                  <h2>Report Configuration</h2>
                </div>
              </TabPane>
              <TabPane tab="Database Settings" key="5">
                <div className="tab-content">
                  {/* <Tab5 /> */}
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
