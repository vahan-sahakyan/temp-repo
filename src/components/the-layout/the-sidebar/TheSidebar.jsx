import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import { HomeOL, HomeSD, FileOL, FileSD, CircleOL, CircleSD, ChartOL, ChartSD } from './menu-icons';
import './TheSidebar.scss';
import { Link, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom';

const GITHUB_URL = 'https://vahan-sahakyan.github.io/dashboard/';

const TheSidebar = ({ match, history }) => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  console.log(pathname);
  let logo, toggleSidebar, sidebar;

  const updateToggleIcon = () => {
    !logo.className.includes('closed')
      ? (toggleSidebar.src = `${GITHUB_URL}assets/icons/close.png`)
      : (toggleSidebar.src = `${GITHUB_URL}assets/icons/more.png`);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const toggleOnClickHandler = () => {
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
    // OPEN
    if (!isClosed) return;
    sidebar.classList.add('open'); // ADD
    sidebar.classList.remove('closed'); // REMOVE
    logo.classList.add('open'); // ADD
    logo.classList.remove('closed'); // REMOVE
    console.log('✅ Opened');
    updateToggleIcon();
    setIsClosed(false);
  };

  const closeSidebar = () => {
    // CLOSE
    if (isClosed) return;
    sidebar.classList.add('closed'); // ADD
    sidebar.classList.remove('open'); // REMOVE
    logo.classList.add('closed'); // ADD
    logo.classList.remove('open'); // REMOVE
    console.log('❌ Closed');
    updateToggleIcon();
    // anti auto-close OFF
    setIsClicked(false);
    setIsClosed(true);
  };

  useEffect(() => {
    // toggleOnClickHandler();
    console.log(new Date());
    ///////////////////////////////////////////////////
    // console.log('DEBUG:', logo);
  }, []);
  return (
    <aside
      ref={sidebarRef => (sidebar = sidebarRef)}
      onMouseLeave={() => !isClicked && closeSidebar()}
      className="sidebar  open"
    >
      <div className="sidebar-head">
        <h1 ref={logoRef => (logo = logoRef)} id="logo">
          SIGNAL AI
        </h1>
        <img
          onClick={toggleOnClickHandler}
          id="toggle-sidebar"
          ref={toggleSidebarRef => (toggleSidebar = toggleSidebarRef)}
          alt="close"
          src={GITHUB_URL + 'assets/icons/close.png'}
        />
      </div>

      <ul onMouseEnter={openSidebar} className="menu-items">
        <Link to="/home">
          <MenuItem handleClick={closeSidebar} item={<HomeOL />} name="Home" />
        </Link>
        <Link to="/projects">
          <MenuItem handleClick={closeSidebar} item={<FileSD />} name="Projects" />
        </Link>
        <Link to="/signals">
          <MenuItem handleClick={closeSidebar} item={<CircleSD />} name="Signals" />
        </Link>
        {/* <Link to="/drug-event-combination">
          <MenuItem handleClick={closeSidebar} item={<ChartSD />} name="Drug Event Combination" />
        </Link> */}
      </ul>
    </aside>
  );
};

export default TheSidebar;
