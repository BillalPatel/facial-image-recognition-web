import React, { useState } from 'react';
import Form from './Form';

const RegisterForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    setUserName, onRouteChange
  } = props;


  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitRegistration = async () => {
    await fetch('http://localhost:5000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then((res) => {
        if (res.status === 200) {
          setUserName(name);
          onRouteChange('landing');
        }
      });
  };

  return (
    <Form
      formName="Register"
      displayNameField
      nameChange={onNameChange}
      emailChange={onEmailChange}
      passwordChange={onPasswordChange}
      confirmPassword
      buttonName="Register!"
      clickButton={onSubmitRegistration}
      displaySignUpLink={false}
    />
  );
};

export default RegisterForm;
