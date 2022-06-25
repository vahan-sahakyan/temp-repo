import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';

const gitHubBaseURL = 'https://vahan-sahakyan.github.io/dashboard/';

function App() {
  const logo = document.getElementById('logo');
  const toggleSidebar = document.getElementById('toggle-sidebar');
  // const menuItems = document.querySelector('.menu-items').querySelectorAll('li');
  const sidebar = document.querySelector('.sidebar');

  const updateToggleIcon = () => {
    !logo.className.includes('closed')
      ? (toggleSidebar.src = gitHubBaseURL + 'assets/icons/close.png')
      : (toggleSidebar.src = gitHubBaseURL + 'assets/icons/more.png');
  };
  const [isClicked, setIsClicked] = useState(false);
  const toggleHandler = () => {
    sidebar.classList.toggle('closed'); // TOGGLE
    sidebar.classList.toggle('open'); // TOGGLE
    logo.classList.toggle('closed'); // TOGGLE
    logo.classList.toggle('open'); // TOGGLE
    updateToggleIcon();

    // anti auto-close TOGGLE ON/OFF only onClick
    setIsClicked(!isClicked);
  };

  const openSidebar = () => {
    sidebar.classList.add('open'); // ADD
    sidebar.classList.remove('closed'); // REMOVE
    console.log('✅ Opened');
    logo.classList.add('open'); // ADD
    logo.classList.remove('closed'); // REMOVE
    updateToggleIcon();
  };

  const closeSidebar = () => {
    sidebar.classList.add('closed'); // ADD
    sidebar.classList.remove('open'); // REMOVE
    console.log('❌ Closed');
    logo.classList.add('closed'); // ADD
    logo.classList.remove('open'); // REMOVE
    updateToggleIcon();

    // anti auto-close OFF
    setIsClicked(false);
  };

  const selectMenuItem = ({ target }) => {
    // closeSidebar();
    // menuItems.forEach(el => el.classList.remove('active_menu-item'));
    // setTimeout(() => {
    //   target.classList.add('active_menu-item');
    // }, 300);
  };

  useEffect(() => {
    // openSidebar();
    toggleHandler();
  }, [1]);

  return (
    <div className="global-container">
      <aside
        // onMouseEnter={openSidebar}
        onMouseLeave={() => !isClicked && closeSidebar()}
        className="sidebar  open"
      >
        <div className="sidebar-head">
          <h1 className="" id="logo">
            SIGNAL AI
          </h1>
          <img onClick={toggleHandler} id="toggle-sidebar" alt="close" src={gitHubBaseURL + 'assets/icons/more.png'} />
        </div>

        <ul
          onMouseEnter={openSidebar}
          // onMouseLeave={closeSidebar}
          className="menu-items"
        >
          <li onClick={selectMenuItem} className="active_menu-item">
            <i className="menu-item_icon fa-solid fa-house"></i>
            <p className="menu-item_text hiddenn">Home</p>
          </li>
          <li onClick={selectMenuItem}>
            <i className="menu-item_icon fa-solid fa-file-lines"></i>
            <p className="menu-item_text hiddenn">Projects</p>
          </li>
          <li onClick={selectMenuItem}>
            <i className="menu-item_icon fa-solid fa-circle-exclamation"></i>
            <p className="menu-item_text hiddenn">Signals</p>
          </li>
          <li onClick={selectMenuItem}>
            <i
              // style={{ height: '40px', lineHeight: '40px' }}
              className="menu-item_icon fa-solid fa-chart-simple"
            ></i>
            <p className="menu-item_text hiddenn">Drug Event Combination</p>
          </li>
        </ul>
      </aside>
      <div className="wrapper" onClick={closeSidebar}>
        <nav className="profile-navbar">
          <div className="profile-navbar_icons">
            <button>
              <img alt="support-icon" className="support-icon" src={gitHubBaseURL + 'assets/icons/lifebuoy.png'} />
            </button>
            <button>
              <img alt="settings-icon" className="settings-icon" src={gitHubBaseURL + 'assets/icons/setting.png'} />
            </button>
            <button>
              <img
                alt="notification-icon"
                className="notification-icon"
                src={gitHubBaseURL + 'assets/icons/notification.png'}
              />
            </button>
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
            <button className="card">
              <i className="card--icon blue fa-solid fa-file-lines"></i>
              <span className="card--quantity">5</span>
              <p className="card--name">Projects Created</p>
            </button>
            <button className="card card_active">
              <i className="card--icon yellow fa-solid fa-file-lines"></i>
              <span className="card--quantity ">6</span>
              <p className="card--name">Projects to Review</p>
            </button>
            <button className="card">
              <i className="card--icon black fa-solid fa-file-lines"></i>
              <span className="card--quantity">5</span>
              <p className="card--name">Projects for QC</p>
            </button>
            <button className="card">
              <i className="card--icon red fa-solid fa-circle-exclamation"></i>
              <span className="card--quantity">3</span>
              <p className="card--name">Signals Identified</p>
            </button>
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
