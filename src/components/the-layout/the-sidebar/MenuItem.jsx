import React, { useEffect, useRef, useState } from 'react';

const MenuItem = ({ handleClick, item, text, isActiveProp }) => {
  const ref = useRef();
  const { current } = ref;
  const [isActive, setIsActive] = useState(isActiveProp);

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
      <p className="menu-item_text">{text}</p>
    </li>
  );
};

export default MenuItem;
