import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './App.css';
import {
  HomeOL,
  HomeSD,
  FileOL,
  FileSD,
  CircleOL,
  CircleSD,
  ChartOL,
  ChartSD,
} from './components/MenuIcons/menu-icons';

const gitHubBaseURL = 'https://vahan-sahakyan.github.io/dashboard/';

const MenuItem = ({ handleClick, itemOL, itemSD, text, isActiveProp }) => {
  const ref = useRef();
  const item = ref.current;
  const [isActive, setIsActive] = useState(isActiveProp);

  return (
    <li
      ref={ref}
      onClick={() => {
        handleClick();
        setIsActive(true);
        item.classList.add('active_menu-item')
        item.closest('ul').querySelectorAll('li').forEach(el => {
            if (el.textContent !== item.textContent) {
                el.classList.remove('active_menu-item');
            }
        })
      }}
      className={isActive ? 'active_menu-item' : ''}
    >
      {!isActive ? itemOL : itemSD}
      <p className="menu-item_text">{text}</p>
    </li>
  );
};

function App() {
  const logo = document.getElementById('logo');
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const menuItems = document.querySelector('.menu-items').querySelectorAll('li');
  const sidebar = document.querySelector('.sidebar');

  const updateToggleIcon = () => {
    !logo.className.includes('closed')
      ? (toggleSidebar.src = gitHubBaseURL + 'assets/icons/close.png')
      : (toggleSidebar.src = gitHubBaseURL + 'assets/icons/more.png');
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const toggleHandler = () => {
    sidebar.classList.toggle('closed'); // TOGGLE
    sidebar.classList.toggle('open'); // TOGGLE
    logo.classList.toggle('closed'); // TOGGLE
    logo.classList.toggle('open'); // TOGGLE
    updateToggleIcon();

    // anti auto-close TOGGLE ON/OFF only onClick
    setIsClicked(!isClicked);
    setIsClosed(!isClosed);
  };

  const openSidebar = () => {
    if (!isClosed) return;
    sidebar.classList.add('open'); // ADD
    sidebar.classList.remove('closed'); // REMOVE
    console.log('✅ Opened');
    logo.classList.add('open'); // ADD
    logo.classList.remove('closed'); // REMOVE
    updateToggleIcon();
    setIsClosed(false);
  };

  const closeSidebar = () => {
    if (isClosed) return;
    sidebar.classList.add('closed'); // ADD
    sidebar.classList.remove('open'); // REMOVE
    console.log('❌ Closed');
    logo.classList.add('closed'); // ADD
    logo.classList.remove('open'); // REMOVE
    updateToggleIcon();

    // anti auto-close OFF
    setIsClicked(false);
    setIsClosed(true);
  };

  const selectMenuItem = () => {
    closeSidebar();
  };

  useEffect(() => {
    // openSidebar();
   toggleHandler();
  }, []);

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
          <MenuItem
            handleClick={selectMenuItem}
            isActiveProp={true}
            itemOL={<HomeOL />}
            itemSD={<HomeSD />}
            text="Home"
          />
          <MenuItem handleClick={selectMenuItem} itemOL={<FileOL />} itemSD={<FileSD />} text="Projects" />
          <MenuItem handleClick={selectMenuItem} itemOL={<CircleOL />} itemSD={<CircleSD />} text="Signals" />
          <MenuItem
            handleClick={selectMenuItem}
            itemOL={<ChartOL />}
            itemSD={<ChartSD />}
            text="Drug Event Combination"
          />
        </ul>
      </aside>
      <div
        className="wrapper"
        // onClick={closeSidebar}
      >
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
