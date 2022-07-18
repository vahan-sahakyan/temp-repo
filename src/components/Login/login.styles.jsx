import styled from 'styled-components';

export const SignInContainer = styled.div`
  color: #4d4f5c77;

  display: flex;

  flex-direction: column;
  text-align: center;

  max-width: 25em;
  flex: 1;
  img {
    align-self: center;
    /* margin-bottom: -1em; */
  }
`;

export const FormContainer = styled.form`
  width: auto;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: -1em;
  gap: 1.7em;
  .ant-btn-primary {
    padding: 1.5em 0;
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3fa9f5;
  }
  span {
    /* color: #0a7afa; */

    text-align: center;
  }
`;
