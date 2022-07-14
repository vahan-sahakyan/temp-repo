import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import MenuItem from './MenuItem';
import { HomeOutlineSVG, FileSolidSVG, CircleSolidSVG } from './menu-icons';
import './TheSidebar.scss';
import { Link, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom';
import { SidebarStyled } from './the-sidebar.styles';

const TheSidebar = ({ match, history }) => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  console.log(pathname);
  const toggleSidebarIMG = useRef();

  const updateToggleIcon = () => {
    isClosed === true
      ? (toggleSidebarIMG.current.src = `/assets/icons/close.png`)
      : (toggleSidebarIMG.current.src = `/assets/icons/more.png`);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const toggleOnClickHandler = () => {
    updateToggleIcon();

    setIsClicked(!isClicked); // ANTI auto-OPEN/CLOSE
    setIsClosed(!isClosed);
  };

  const openSidebar = () => {
    // OPEN
    if (!isClosed) return;
    console.log('✅ Opened');
    updateToggleIcon();
    setIsClosed(false);
  };

  const closeSidebar = () => {
    // CLOSE
    if (isClosed) return;
    console.log('❌ Closed');
    updateToggleIcon();
    // anti auto-close OFF
    setIsClicked(false);
    setIsClosed(true);
  };

  return (
    <SidebarStyled isClosed={isClosed} onMouseLeave={() => !isClicked && closeSidebar()} className="sidebar">
      <div className="sidebar-head">
        <Link to="/home">
          <h1 id="logo">SIGNAL AI</h1>
        </Link>
        <img
          onClick={toggleOnClickHandler}
          id="toggle-sidebar"
          ref={toggleSidebarIMG}
          alt="close"
          src={'/assets/icons/more.png'}
        />
      </div>

      <ul onMouseEnter={openSidebar} className="menu-items">
        <Link to="/home">
          <MenuItem active={pathname === 'home'} handleClick={closeSidebar} item={<HomeOutlineSVG />} name="Home" />
        </Link>
        <Link to="/projects">
          <MenuItem
            active={pathname === 'projects'}
            handleClick={closeSidebar}
            item={<FileSolidSVG />}
            name="Projects"
          />
        </Link>
        <Link to="/signals">
          <MenuItem
            active={pathname === 'signals'}
            handleClick={closeSidebar}
            item={<CircleSolidSVG />}
            name="Signals"
          />
        </Link>
        {/* <Link to="/drug-event-combination">
          <MenuItem handleClick={closeSidebar} item={<ChartSD />} name="Drug Event Combination" />
        </Link> */}
      </ul>
    </SidebarStyled>
  );
};

export default TheSidebar;
