import React, { useState, useEffect } from "react";
import { Content, Title, Box, Image, Media, Button, Field, Control, Textarea } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment';
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

const button = {
  'width': '50%',
  'marginLeft': '25%',
  'marginRight': '25%',
};

const media = {
  'margin': '20px',
};

const title = {

};


export default function BlogPost(props) {
  const id  = props.match.params.id;
  const [post, setPost] = useState([])
  const [commentsBoxOpen, setCommentBoxOpen] = useState(true);

  let placeHolderObject = {
    id: 1,
    author: 'Quest 2123',
    content: 'Very nice post',
    reactAmount: 0
  }

  let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${id}`;

  let commentUrl = process.env.REACT_APP_COMMENTS_API_URL_DEVEL;

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

          <Control>
            <Button style={button} outlined color={'#333'} key={'#333'} onClick={() => setCommentBoxOpen(!commentsBoxOpen)} >
              View Comments (1)
            </Button>
          </Control>

          <Content hidden={commentsBoxOpen} key={placeHolderObject.id}>
              <Comment key={placeHolderObject.id} comment={placeHolderObject} />
          </Content>

          <Content hidden={commentsBoxOpen}>
            <Media style={media} as="article">
              <Media.Item align="left">
                <FontAwesomeIcon size={'3x'} icon={faUserCircle} />
              </Media.Item>
              <Media.Item align="content">
                <Field>
                  <Control as="p">
                    <Textarea placeholder="Add a comment..." />
                  </Control>
                </Field>
                <Field>
                  <Control as="p">
                    <Button>Post comment</Button>
                  </Control>
                </Field>
              </Media.Item>
            </Media>
          </Content>

    </Box>
    </div>
  );
}