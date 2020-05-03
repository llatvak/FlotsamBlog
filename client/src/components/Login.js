import React, { useState, useEffect } from "react";
import { Field, Input, Box, Control, Button, Title, Label } from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';


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
  const [passwordRef, setPasswordRef] = useState('')
  const [usernameRef, setUsernameRef] = useState('')

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
        //setAuthTokens(response.data)
        //setLoggedIn(true)
        console.log(response)
      } else {
        //setIsError(true)
        console.log("Error set")
      }
    }).catch(error => {
      //setIsError(true)
      console.log(error.message)
    })
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
            <Button as={Link} onClick={postLogin} to="/dashboard" color="success">Login</Button>
          </Control>
        </Field>
      </Box>
    </div>
  );
}