import styled, { css } from 'styled-components';

const closedSidebarStyles = css`
  width: 4.6em;

  .menu-item_text {
    opacity: 0;
    transition: 300ms;
  }

  h1 {
    opacity: 0;
    transition: 300ms;
  }
`;

const openSidebarStyles = css`
  width: 240px;

  .menu-item_text {
    transition: 150ms;
  }

  h1 {
    display: flex;
    transition: 300ms;
  }
`;

const getSidebarStyles = ({ isClosed }) => (isClosed ? closedSidebarStyles : openSidebarStyles);

export const SidebarStyled = styled.aside`
  transition: 500ms;

  color: #fff;
  background-color: #13334a;

  ${getSidebarStyles}
`;
