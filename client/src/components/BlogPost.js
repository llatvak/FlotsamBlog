import React, { useState, useEffect } from "react";
import { Content, Icon, Level, Title, Box, Container, Image, Media, Button, Field, Control, Textarea } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

import Comment from './Comment';
import GridView from './GridView'

import axios from 'axios';

const container = {
  'padding': '16px'
};
const box = {
  'margin': 'auto',
  'marginTop': '60px',
  'marginBottom': '100px',
  'padding': '48px'
};

const imageContainer = {
  'marginTop': '20px',
  'marginBottom': '20px',
};

const image = {
  'borderRadius': '5px',
};

const body = {
  'whiteSpace': 'pre-line',
  'fontSize': '18px',
};

const button = {
  'width': '72%',
  'marginLeft': '5%'
};

const likeButton = {
  paddingLeft: '40px',
};

const media = {
  'margin': '20px'
};

const title = {
  'paddingTop': '20px',
};

export default function BlogPost(props) {
  const id  = props.match.params.id;
  const [post, setPost] = useState([])
  const [recommendedPosts, setRecommendedPosts] = useState([])
  const [commentsBoxOpen, setCommentBoxOpen] = useState(true);
  const [comments, setComments] = useState([])
  const [commentAreaRef, setCommentAreaRef] = useState('')
  let [heartIconColor, setHeartIconColor] = useState('grey')
  const [isPostLiked, setPostLiked] = useState(false)
  const [initialized, setInitialized] = useState(false)

  let history = useHistory();
  
  let url = process.env.REACT_APP_POSTS_API_URL_PROD;
  let postUrl = url + `${id}`;
  let commentUrl = process.env.REACT_APP_COMMENTS_API_URL_PROD;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL;
      postUrl = url + `${id}`;
      commentUrl = process.env.REACT_APP_COMMENTS_API_URL_DEVEL;
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
    fetchRecommendations();
    
      let likedPosts = [];
      if(localStorage.getItem(`likedPosts`)) {
        likedPosts = JSON.parse(localStorage.getItem(`likedPosts`));
          
          if(likedPosts.includes(id) && !initialized) {
              setPostLiked(true);
              setHeartIconColor('light')
              setInitialized(true)
          };
      };
  }, [])

  const handleHeartIconClick = e => {
    let likedPostsInStorage = [];
    if(localStorage.getItem(`likedPosts`)) {
      likedPostsInStorage = JSON.parse(localStorage.getItem(`likedPosts`));
    }

    if(!likedPostsInStorage.includes(id)) {
      likedPostsInStorage.push(id);
    }
    localStorage.setItem(`likedPosts`, JSON.stringify(likedPostsInStorage));

    if (!isPostLiked) {
      setHeartIconColor('info')
      updateLikes(++post.postLikes);
      setPostLiked(true)
    } else {
      updateLikes(--post.postLikes)
      setHeartIconColor('grey')
      setPostLiked(false)
      localStorage.setItem(`likedPosts`, '')
    }
  }

  const updateLikes = (e) => {
    const tempPost = {
      title: post.title,
      description: post.description,
      body: post.body,
      date: post.date,
      url: post.url,
      imageUrl: post.imageUrl,
      category: post.category,
      postLikes: post.postLikes
    }
    console.log(tempPost)
    axios
     .put(postUrl, tempPost)
     .then(response => {
       console.log(response)
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const fetchPost = () => {
    axios
     .get(postUrl)
     .then(response => {
       setPost(response.data);
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const fetchComments = () => {
    axios
     .get(commentUrl)
     .then(response => {
       filterData(response.data);
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const fetchRecommendations = () => {
    axios
     .get(url)
     .then(response => {
      setRecommendedPosts(randomizePosts(response.data));
     }).catch(error => {
       alert(`${error}`)
   })
  }

  const randomizePosts = (allPosts) => {
    let randomPosts = [];
    let arr = [];

    while(arr.length < 3){
        var r = Math.floor(Math.random() * allPosts.length);
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(let i of arr) {
      randomPosts.push(allPosts[i])
    }
    return randomPosts;
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

const handleClickCategory = e => {
  history.push({
              pathname: '/search',
              state: { query: e.target.lastChild.data}
              })
}

  return (
    <div>
    <Container breakpoint="mobile" style={container}>
    <Box style={box}>
        
        <Content>
          <Title style={title}>{post.title}</Title>
          <Title size={6} onClick={handleClickCategory}><a>{post.category}</a></Title>
            <p>{post.date}</p>
        </Content>

          <Image.Container size={'16by9'} style={imageContainer}>
            <Image src={post.imageUrl} style={image}/>
          </Image.Container>

          <Content style={body}>
            <p>
              {post.body}
            </p>
          </Content>

          <Level align="center">
              <Button style={button} outlined color={'#333'} key={'#333'} onClick={() => setCommentBoxOpen(!commentsBoxOpen)} >
                View Comments ({comments.length})
              </Button>
              <Icon style={likeButton} color={heartIconColor} as="a">
                  <FontAwesomeIcon size="lg" icon={faHeart} onClick={() => handleHeartIconClick()} />
                  <small>{post.postLikes}</small>
              </Icon>
          </Level>
          

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
    <Box style={box}>
    <Content>
          <Title style={title}>Recommended posts</Title>
        </Content>
      <GridView posts={recommendedPosts}></GridView>
    </Box>
    </Container>
    </div>
  );
}