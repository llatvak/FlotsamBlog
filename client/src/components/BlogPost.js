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
  const [comments, setComments] = useState([])
  const [commentAreaRef, setCommentAreaRef] = useState('')

  let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${id}`;

  let commentUrl = process.env.REACT_APP_COMMENTS_API_URL_PROD;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL + `${id}`;
      commentUrl = process.env.REACT_APP_COMMENTS_API_URL_DEVEL;
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [])

  const fetchPost = () => {
    axios
     .get(url)
     .then(response => {
       setPost(response.data);
       console.log(response);
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const fetchComments = () => {
    axios
     .get(commentUrl)
     .then(response => {
       filterData(response.data);
       console.log(response);
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const filterData = (data) => {
    const commentArray = [];
    for(let i = 0; i < data.length; i++) {
      if(Number(data[i].postId) === Number(id)) {
        commentArray.push(data[i]);
      }
    }
    setComments(commentArray);
  }

  const handleCommentPost = (e) => {
    const tempDate = formatDate(new Date().toString())
    const tempContent = commentAreaRef.value
    if (commentAreaRef.value.length > 0) {
      const tempComment = {author: 'Guest515', content: tempContent, date: tempDate, likes: 0, postId: id}
      axios
      .post(commentUrl, tempComment)
      .then(response => {
        console.log(response)
        commentAreaRef.value = ''
      }).then(() =>
          fetchComments()
      ).catch(error => {
        alert(`${error}`)
      })
    } else {
      alert('Comment length must be at least 1')
    }
  }

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('.');
}

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
              View Comments ({comments.length})
            </Button>
          </Control>

          <Content hidden={commentsBoxOpen} key={comments.id}>
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} postId={post.id}/>
              ))}
          </Content>

          <Content hidden={commentsBoxOpen}>
            <Media style={media} as="article">
              <Media.Item align="left">
                <FontAwesomeIcon size={'3x'} icon={faUserCircle} />
              </Media.Item>
              <Media.Item align="content">
                <Field>
                  <Control as="p">
                    <Textarea ref={(textarea) => {setCommentAreaRef(textarea)}} placeholder="Add a comment..." />
                  </Control>
                </Field>
                <Field>
                  <Control as="p">
                    <Button onClick={handleCommentPost}>Post comment</Button>
                  </Control>
                </Field>
              </Media.Item>
            </Media>
          </Content>

    </Box>
    </div>
  );
}