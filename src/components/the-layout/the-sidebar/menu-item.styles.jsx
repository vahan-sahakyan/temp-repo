import styled, { css } from 'styled-components';

const activeItemStyles = css`
  color: #fff;
  background-color: #1112;
  border-left: 5px solid #3fa9f5;
`;
const passiveItemStyles = css`
  background-color: unset;
  border-left: 5px solid #0000;
  color: #89a;
`;
const getItemStyles = ({ isActive }) => (isActive ? activeItemStyles : passiveItemStyles);

export const MenuItemStyled = styled.li`
  /* color: #89a; */
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.2em 1.4em;
  border-left: 5px solid #0000;
  overflow-x: hidden;
  cursor: pointer;

  & i {
    min-width: 16px;
  }

  &:hover {
    color: #fff;
    background-color: #1112;
    border-left: 5px solid #3fa9f5;
  }

  ${getItemStyles}
`;
