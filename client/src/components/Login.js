import React, { useState } from "react";
import { Field, Input, Box, Control, Button, Title, Label, Container } from "rbx";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth"

const container = {
  'padding': '16px'
};
const box = {
  'margin': 'auto',
  'padding': '30px',
  'marginTop': '100px',
  'width': '320px'
};

export default function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [passwordRef, setPasswordRef] = useState('')
  const [usernameRef, setUsernameRef] = useState('')
  const { setAuthTokens } = useAuth();

  let loginUrl = process.env.REACT_APP_LOGIN_URL_DEVEL;

  if(process.env.NODE_ENV !== 'production') {
    // needs production login url?
    // loginUrl = process.env.REACT_APP_LOGIN_URL_PROD;
  }

  const postLogin = () => {
    let usernameValue = usernameRef.value
    let passwordValue = passwordRef.value
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
      console.log('enter')
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
      <Title>Login</Title>
        <Field align="centered">
          <Label>Username</Label>
          <Control>
            <Input type="text" placeholder="Username" ref={(username) => {setUsernameRef(username)}} onKeyDown={handleKeyPressLogin}/>
          </Control>
        </Field>

        <Field align="centered">
          <Label>Password</Label>
          <Control>
            <Input type="password" placeholder="Password" ref={(password) => {setPasswordRef(password)}} onKeyDown={handleKeyPressLogin}/>
          </Control>
        </Field>

        <Field>
          <Control>
            <Button onClick={postLogin} color="primary">Login</Button>
          </Control>
        </Field>
      </Box>
      </Container>
    </div>
  );
}