import React, { useState } from "react";
import { Field, Input, Box, Control, Button, Title, Label, Container, Help } from "rbx";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth"
import { useForm } from "react-hook-form";

const container = {
  'padding': '16px'
};
const box = {
  'margin': 'auto',
  'padding': '30px',
  'marginTop': '100px',
  'width': '320px'
};
const loginbutton = {
  'marginTop': '20px',
};

export default function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { setAuthTokens } = useAuth();
  const { register, handleSubmit, errors } = useForm();

  let loginUrl = process.env.REACT_APP_LOGIN_URL_DEVEL;

  if(process.env.NODE_ENV !== 'production') {
    // needs production login url?
    // loginUrl = process.env.REACT_APP_LOGIN_URL_PROD;
  }
  const handleChangeUsername = e => {
    setUsername(e.target.value);
  }

  const handleChangePassword = e => {
    setPassword(e.target.value);
  }

  const postLogin = () => {
    let usernameValue = username;
    let passwordValue = password
    let tempData = { username: usernameValue, password: passwordValue }
    axios
    .post(loginUrl, tempData)
    .then(response => {
      if(response.status === 200) {
          if(response.headers.authorization.startsWith("Bearer ")) {
            setAuthTokens(response.headers.authorization)
            setLoggedIn(true)
          } 
      } else {
        alert('Wrong username or password!')
      }
    }).catch(error => {
        alert('Wrong username or password!')
        console.log(error.message)
    })
  }
  
  const handleKeyPressLogin = (event) => {
    if(event.key === 'Enter'){
      postLogin();
    }
  }

  if(isLoggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
    <Container breakpoint="mobile" style={container}>
      <Box style={box}>
      <form onSubmit={handleSubmit(postLogin)}>
      <Title>Login</Title>
        <Field align="centered">
          <Label>Username</Label>
          <Control>
            <Input type="text" color={'primary'} name="Username" placeholder="Username" ref={register({required: true})} onKeyDown={handleKeyPressLogin} onChange={handleChangeUsername}/>
            <Help color={'danger'}>{errors.Username && "Username is required"}</Help>
          </Control>
        </Field>

        <Field align="centered">
          <Label>Password</Label>
          <Control>
            <Input type="password" color={'primary'} name="Password" placeholder="Password" ref={register({required: true})} onKeyDown={handleKeyPressLogin} onChange={handleChangePassword}/>
            <Help color={'danger'}>{errors.Password && "Password is required"}</Help>
          </Control>
        </Field>

        <Field style={loginbutton}>
          <Control>
            <Input as={Button} type="submit" color="primary" >Login</Input>
          </Control>
        </Field>
        </form>
      </Box>
      </Container>
    </div>
  );
}