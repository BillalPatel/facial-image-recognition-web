import React, { useState } from 'react';
import axios from 'axios';

import Form from './Form';

const SignInForm = (props) => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const { setUserName, onRouteChange } = props;

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const setName = async (signInEmail) => {
    await axios.get(`http://localhost:5000/profile/${signInEmail}`)
      .then((res) => {
        if (res.status === 200) {
          setUserName(res.data);
        }
      });
  };

  const onSubmitSignIn = async () => {
    await fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          onRouteChange('landing');
        }
      })
      .catch((err) => console.log(err));
    await setName(signInEmail);
  };

  const clickSignUp = () => {
    onRouteChange('signup');
  };

  return (
    <Form
      formName="Sign In"
      displayNameField={false}
      emailChange={onEmailChange}
      passwordChange={onPasswordChange}
      confirmPassword={false}
      buttonName="Sign In"
      clickButton={onSubmitSignIn}
      showSignUpLink={false}
      displaySignUpLink
      displaySignInLink={false}
      changeToSignUpForm={clickSignUp}
    />
  );
};

export default SignInForm;
