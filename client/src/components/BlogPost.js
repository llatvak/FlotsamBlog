import React, { useState, useEffect } from "react";
import { Content, Title, Container, Image } from "rbx";
import axios from 'axios';
import NavBar from "./NavBar";

const content = {
  'margin': '80px',
  'background-color': '#fafafa',
  'border-radius': '25px'
};

const image = {
  'margin-top': '20px',
  'border-radius': '25px'
};

const body = {
  'padding': '25px',
};


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
    <Container>
      <Content style={content}>
      <Image.Container  size={'3by2'} >
        <Image src={post.imageUrl} style={image}/>
      </Image.Container>

        <Content style={body}>
          <Title>{post.title}</Title>
          <Title size={6}>{post.category}</Title>
          <p>
            {post.body}
          </p>

          <p>
            {post.date}
          </p>

        </Content>

      </Content>
    </Container>
    </div>
  );
}