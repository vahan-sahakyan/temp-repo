import React, { useState } from 'react';
import './Login.scss';

import {
  FormContainer,
  SubmitContainer,
  SignInContainer,
} from './login.styles';
import FormInput from './form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import { Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    // history.push('home');
  };
  const handleClick = () => {
    history.push('home');
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='login'>
      <SignInContainer>
        {/* <h2 style={{ fontSize: '2em', color: '#008', fontWeight: 'bold' }}>
          ▷&nbsp; DF Signals <span style={{ color: 'orange' }}> AI</span>
        </h2> */}
        <img
          style={{ height: '9em', width: '16em' }}
          src='/DF_Signal_AI.png'
          alt='DF Signal AI'
        />
        <span>Welcome back! Please login to your account.</span>

        <FormContainer onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='Email Address'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={handleChange}
            value={password}
            label='Password'
            required
          />
          <SubmitContainer>
            <Button type='link'>Forgot Password?</Button>
            <Button onClick={handleClick} type='primary'>
              Login
            </Button>
          </SubmitContainer>
        </FormContainer>
      </SignInContainer>
    </div>
  );
};

export default Login;
