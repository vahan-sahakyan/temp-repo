import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import { HomeOL, HomeSD, FileOL, FileSD, CircleOL, CircleSD, ChartOL, ChartSD } from '../MenuIcons/menu-icons';

const GITHUB_URL = 'https://vahan-sahakyan.github.io/dashboard/';

// const logo = document.getElementById('logo');
// const toggleSidebar = document.getElementById('toggle-sidebar');
// const sidebar = document.querySelector('.sidebar');
// const menuItems = document.querySelector('.menu-items').querySelectorAll('li');

const TheSidebar = () => {
  const logoR = useRef();
  const logo = logoR.current;
  const toggleSidebarR = useRef();
  const toggleSidebar = toggleSidebarR.current;
  const sidebarR = useRef();
  const sidebar = sidebarR.current;

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

  useLayoutEffect(() => {
    // toggleOnClickHandler();
    console.log(new Date());
    ////////////////////////////////////////////////////
    console.log('DEBUG:', logo);
  }, []);

  return (
    <aside ref={sidebarR} onMouseLeave={() => !isClicked && closeSidebar()} className="sidebar  open">
      <div className="sidebar-head">
        <h1 ref={logoR} id="logo">
          SIGNAL AI
        </h1>
        <img
          onClick={toggleOnClickHandler}
          id="toggle-sidebar"
          ref={toggleSidebarR}
          alt="close"
          src={GITHUB_URL + 'assets/icons/more.png'}
        />
      </div>

      <ul onMouseEnter={openSidebar} className="menu-items">
        <MenuItem handleClick={closeSidebar} item={<HomeOL />} text="Home" isActiveProp={true} />
        <MenuItem handleClick={closeSidebar} item={<FileSD />} text="Projects" />
        <MenuItem handleClick={closeSidebar} item={<CircleSD />} text="Signals" />
        <MenuItem handleClick={closeSidebar} item={<ChartSD />} text="Drug Event Combination" />
      </ul>
    </aside>
  );
};

export default TheSidebar;
