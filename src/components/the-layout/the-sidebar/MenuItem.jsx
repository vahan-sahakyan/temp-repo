import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MenuItem = ({ handleClick, item, name }) => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  // setting active style based on pathname, for reloading
  const [isActive, setIsActive] = useState(pathname === name.toLowerCase().replaceAll(' ', '-'));
  console.log(pathname);

  const ref = useRef();
  const { current } = ref;

  const updateItem = () => {
    handleClick();
    setIsActive(true);
    current.classList.add('active_menu-item');
    current
      .closest('ul')
      .querySelectorAll('li')
      .forEach(el => {
        if (el.textContent !== current.textContent) {
          el.classList.remove('active_menu-item');
        }
      });
  };
  return (
    <li ref={ref} onClick={updateItem} className={isActive ? 'active_menu-item' : ''}>
      {item}
      <p className="menu-item_text">{name}</p>
    </li>
  );
};

export default MenuItem;
