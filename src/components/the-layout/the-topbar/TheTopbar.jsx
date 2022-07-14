import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TheTopbar.scss';
import { TopbarButton } from './topbar-button.styles';
import { NotificationsSVG, SettingsSVG, SupportSVG } from './topbar-icons';

const TheTopbar = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  console.log(pathname);

  return (
    <nav className="topbar">
      {/* TOPBAR ICONS START */}
      <div className="topbar_icons">
        <TopbarButton active={pathname === 'support'} className="support-icon">
          <SupportSVG />
        </TopbarButton>
        <Link to="/admin-settings">
          <TopbarButton active={pathname === 'admin-settings'} className="settings-icon">
            <SettingsSVG />
          </TopbarButton>
        </Link>

        <TopbarButton active={pathname === 'notifications'} className="notification-icon">
          <NotificationsSVG />
          <span className="notification-dot">&nbsp;</span>
        </TopbarButton>
      </div>
      {/* TOPBAR ICONS END */}

      {/* USER START */}
      <div className="user">
        <span className="user_name"> Bharath Reddy</span>
        <i className="fa-solid fa-chevron-down"></i>
        <img className="user_avatar" src="/assets/avatars/mock-avatar.jpeg" alt="user_avatar" />
      </div>
      {/* USER END */}
    </nav>
  );
};

export default TheTopbar;
