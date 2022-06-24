import React, { useEffect, useLayoutEffect } from 'react';
import './App.css';

const gitHubBaseURL = 'https://vahan-sahakyan.github.io/dashboard/';

function App() {
  // const isHidden = true;
  const logo = document.getElementById('logo');
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const menuTextItems = document.querySelectorAll('.menu-item_text');

  const updateToggleIcon = () => {
    !logo.className.includes('hidden')
      ? (toggleSidebar.src = gitHubBaseURL + 'assets/icons/close.png')
      : (toggleSidebar.src = gitHubBaseURL + 'assets/icons/more.png');
  };

  // const toggleHandler = () => {
  //   menuTextItems.forEach(item => {
  //     item.classList.toggle('hidden');
  //     console.log(item);
  //   });
  //   logo.classList.toggle('hidden');
  //   updateToggleIcon();
  // };

  const openSidebar = () => {
    menuTextItems.forEach(item => {
      item.classList.remove('hidden');
      // console.log(item);
    });
    console.log('✅ Opened');
    logo.classList.remove('hidden');
    updateToggleIcon();
  };
  const closeSidebar = () => {
    menuTextItems.forEach(item => {
      item.classList.add('hidden');
      // console.log(item);
    });
    console.log('❌ Closed');
    logo.classList.add('hidden');
    updateToggleIcon();
  };

  useLayoutEffect(() => {
    openSidebar();
  });

  return (
    <div className="global-container">
      <aside onMouseEnter={openSidebar} onMouseLeave={closeSidebar} className="sidebar">
        <div className="sidebar-head">
          <h1 className="hidden" id="logo">
            SIGNAL AI
          </h1>
          <img
            // onClick={toggleHandler}
            id="toggle-sidebar"
            alt="close"
            src={gitHubBaseURL + 'assets/icons/more.png'}
          />
        </div>

        <ul className="menu-items">
          <li className="active_menu-item">
            <i className="menu-item_icon fa-solid fa-house"></i>
            <p className="menu-item_text hidden">Home</p>
          </li>
          <li>
            <i className="menu-item_icon fa-solid fa-file-lines"></i>
            <p className="menu-item_text hidden">Projects</p>
          </li>
          <li>
            <i className="menu-item_icon fa-solid fa-circle-exclamation"></i>
            <p className="menu-item_text hidden">Signals</p>
          </li>
          <li>
            <i
              // style={{ height: '40px', lineHeight: '40px' }}
              className="menu-item_icon fa-solid fa-chart-simple"
            ></i>
            <p className="menu-item_text hidden">Drug Event Combination</p>
          </li>
        </ul>
      </aside>
      <div className="wrapper">
        <nav className="profile-navbar">
          <div className="profile-navbar_icons">
            <a href="#">
              <img alt="support-icon" className="support-icon" src={gitHubBaseURL + 'assets/icons/lifebuoy.png'} />
            </a>
            <a href="#">
              <img alt="settings-icon" className="settings-icon" src={gitHubBaseURL + 'assets/icons/setting.png'} />
            </a>
            <a href="#">
              <img
                alt="notification-icon"
                className="notification-icon"
                src={gitHubBaseURL + 'assets/icons/notification.png'}
              />
            </a>
          </div>
          <div className="user">
            <span className="user_name"> Bharath Reddy</span>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="user_avatar"></div>
          </div>
        </nav>
        <div className="main-container">
          <header className="main-header">
            <h3 className="main-title">Home</h3>
          </header>
          <ul className="tabs-container">
            <li className="tab active_tab">Dashboard</li>
            <li className="tab">Analysis Overview</li>
          </ul>

          <div className="cards-container">
            <div className="card">
              <i className="card--icon blue fa-solid fa-file-lines"></i>
              <span className="card--quantity">5</span>
              <p className="card--name">Projects Created</p>
            </div>
            <div className="card card_active">
              <i className="card--icon yellow fa-solid fa-file-lines"></i>
              <span className="card--quantity ">6</span>
              <p className="card--name">Projects to Review</p>
            </div>
            <div className="card">
              <i className="card--icon black fa-solid fa-file-lines"></i>
              <span className="card--quantity">5</span>
              <p className="card--name">Projects for QC</p>
            </div>
            <div className="card">
              <i className="card--icon red fa-solid fa-circle-exclamation"></i>
              <span className="card--quantity">3</span>
              <p className="card--name">Signals Identified</p>
            </div>
          </div>
          <h4 className="table-header">Approved Reports</h4>
          {/* TABLE START*/}
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>DRUG</th>
                  <th>EVENT</th>
                  <th>
                    STATUS
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  {/* <th>ALERTS</th> */}
                  <th>
                    FATAL SINCE 2022 Q1
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  <th>
                    FATAL SINCE 2022 Q2
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  <th>COMMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paracetamol</td>
                  <td>Diarrhea</td>
                  <td>Alert</td>
                  {/* 
                  <td>
                    <div className="all-alerts">
                      <div className="alert-icon fatal">F</div>
                      <div className="alert-icon dme-31">D</div>
                      <div className="alert-icon interaction-360">I</div>
                    </div>
                  </td> */}
                  <td>13</td>
                  <td>212</td>
                  <td>Pending Further info</td>
                </tr>
                <tr>
                  <td>Paracetamol</td>
                  <td>Diarrhea</td>
                  <td>Alert</td>
                  {/* 
                  <td>
                    <div className="all-alerts">
                      <div className="alert-icon fatal">F</div>
                      <div className="alert-icon interaction-360">I</div>
                    </div>
                  </td> */}
                  <td>10</td>
                  <td>221</td>
                  <td>Of Note</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* TABLE END*/}

          <h4 className="table-header">Signals</h4>
          {/* TABLE START*/}
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>DRUG</th>
                  <th>EVENT</th>
                  <th>
                    STATUS
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  {/* <th>ALERTS</th> */}
                  <th>
                    FATAL SINCE 2022 Q1
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  <th>
                    FATAL SINCE 2022 Q2
                    <i className="fa-solid fa-chevron-down"></i>
                  </th>
                  <th>COMMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paracetamol</td>
                  <td>Diarrhea</td>
                  <td>Alert</td>
                  {/* 
                  <td>
                    <div className="all-alerts">
                      <div className="alert-icon fatal">F</div>
                      <div className="alert-icon dme-31">D</div>
                      <div className="alert-icon interaction-360">I</div>
                    </div>
                  </td> */}
                  <td>13</td>
                  <td>212</td>
                  <td>Pending Further info</td>
                </tr>
                <tr>
                  <td>Paracetamol</td>
                  <td>Diarrhea</td>
                  <td>Alert</td>
                  {/* 
                  <td>
                    <div className="all-alerts">
                      <div className="alert-icon fatal">F</div>
                      <div className="alert-icon interaction-360">I</div>
                    </div>
                  </td> */}
                  <td>10</td>
                  <td>221</td>
                  <td>Of Note</td>
                </tr>
                <tr>
                  <td>Paracetamol</td>
                  <td>Diarrhea</td>
                  <td>Alert</td>
                  {/* 
                  <td>
                    <div className="all-alerts">
                      <div className="alert-icon fatal">F</div>
                      <div className="alert-icon interaction-360">I</div>
                    </div>
                  </td> */}
                  <td>10</td>
                  <td>133</td>
                  <td>Pending Further info</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* TABLE END*/}
        </div>
      </div>
    </div>
  );
}

export default App;
