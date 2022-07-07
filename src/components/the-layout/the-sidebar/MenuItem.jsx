import React from 'react';
import { MenuItemStyled } from './menu-item.styles';

const MenuItem = ({ handleClick, item, name, active }) => (
  <MenuItemStyled onClick={handleClick} isActive={active}>
    {item}
    <p className="menu-item_text">{name}</p>
  </MenuItemStyled>
);

export default MenuItem;
