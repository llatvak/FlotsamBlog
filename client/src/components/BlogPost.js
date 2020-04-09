import React, { useState, useEffect } from "react";
import { Content, Title,  } from "rbx";
import axios from 'axios';
import NavBar from "./NavBar";

export default function BlogPost(props) {
  const id  = props.match.params.id;
  const [post, setPost] = useState([])

  let url = `https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts/${id}`;

  if(process.env.NODE_ENV === 'production') {
     url = `https://flotsamblog.herokuapp.com/api/posts/${id}`;
  }

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

  return (
    <div>
    <NavBar />
    <Content>
      <Title>{post.title}</Title>
        <p>
          {post.body}
        </p>
    </Content>
    </div>
  );
}