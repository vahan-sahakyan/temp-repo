import styled, { css } from 'styled-components';

const activeButtonStyles = css`
  & svg {
    fill: #ffc06a;
  }
`;
const passiveButtonStyles = css`
  & svg {
    fill: #bcbccb;
  }
`;
const getButtonStyles = ({ active }) => (active ? activeButtonStyles : passiveButtonStyles);

export const TopbarButton = styled.button`
  display: flex;
  align-items: center;

  /* &:focus svg, */
  &:hover svg {
    fill: #ffc06a;
  }

  & svg {
    height: 1.2em;
    line-height: 1.3em;
  }

  ${getButtonStyles}
`;
