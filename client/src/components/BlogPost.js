import React, { useState, useEffect } from "react";
import { Content, Title, Box, Image, Media } from "rbx";
import axios from 'axios';

const box = {
  'margin': 'auto',
  'marginTop': '60px',
  'marginBottom': '100px',
  'maxWidth': '50%'
};

const imageContainer = {
  'marginTop': '20px',
  'marginBottom': '20px',
};

const image = {
  'borderRadius': '5px',
};

const body = {
  'padding': '50px',
};

const title = {

};


export default function BlogPost(props) {
  const id  = props.match.params.id;
  const [post, setPost] = useState([])

  let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${id}`;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL + `${id}`;
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
    <Box breakpoint="tablet" style={box}>
        
        <Content style={body}>
          <Title style={title}>{post.title}</Title>
          <Title style={title} size={6}>{post.category}</Title>
          <p>
            {post.date}
          </p>
          </Content>

          <Image.Container size={'16by9'} style={imageContainer}>
            <Image src={post.imageUrl} style={image}/>
          </Image.Container>

          <Content>
            <p>
              {post.body}
            </p>
          </Content>
        

    </Box>
    </div>
  );
}