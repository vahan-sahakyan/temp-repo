import React from 'react';
import './TheTopbar.scss';

const gitHubBaseURL = 'https://vahan-sahakyan.github.io/dashboard/';

const TheTopbar = () => {
  return (
    <nav className="topbar">
      <div className="topbar_icons">
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
  );
};

export default TheTopbar;
