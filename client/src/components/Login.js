import React, { useState, useEffect, useRef } from "react";
import { Field, Input, Box, Control, Button, Title, Label } from "rbx";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth"

const box = {
  'margin': 'auto',
  'padding': '50px',
  'marginTop': '150px',
  'maxWidth': '40%'
};

const textField = {

};

export default function Login(props) {
  const [post, setPost] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [passwordRef, setPasswordRef] = useState('')
  const [usernameRef, setUsernameRef] = useState('')
  const { setAuthTokens } = useAuth();

  let url = process.env.REACT_APP_POSTS_API_URL_PROD;
  let loginUrl = process.env.REACT_APP_LOGIN_URL_DEVEL;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL;
  }

/*
   useEffect(() => {
    axios
     .get(url)
     .then(response => {
       setPost(response.data);
       console.log(response);
     }).catch(error => {
       alert(`${error}`)
   })
 }, []) 
 */

  const postLogin = () => {
    let usernameValue = usernameRef.value
    let passwordValue = passwordRef.value
    let tempData = { username: usernameValue, password: passwordValue }
    console.log(usernameValue)
    console.log(passwordValue)
    console.log(tempData)
    axios
    .post(loginUrl, tempData)
    .then(response => {
      if(response.status === 200) {
        console.log(response)
        console.log(response.status)
          if(response.headers.authorization.startsWith("Bearer ")) {
            setAuthTokens(response.headers.authorization)
            setLoggedIn(true)
          } 
      } else {
        console.log("Error set")
      }
    }).catch(error => {
        alert('Wrong username or password!')
        console.log(error.message)
    })
  }
  
  if(isLoggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
      <Box style={box}>
      <Title>Login</Title>
        <Field style={textField}>
          <Label>Username</Label>
          <Control>
            <Input type="text" placeholder="Username" ref={(username) => {setUsernameRef(username)}}/>
          </Control>
        </Field>

        <Field style={textField}>
          <Label>Password</Label>
          <Control>
            <Input type="password" placeholder="Password" ref={(password) => {setPasswordRef(password)}} />
          </Control>
        </Field>

        <Field>
          <Control>
            <Button onClick={postLogin} color="success">Login</Button>
          </Control>
        </Field>
      </Box>
    </div>
  );
}