import React, { useState, useEffect } from "react";
import { Content, Media, Level, Icon } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const media = {
  'margin': '20px',
};

export default function Comment(props) {
  let [heartIconColor, setHeartIconColor] = useState('default')
  const [isCommentLiked, setCommentLiked] = useState(false)
  const [initialized, setInitialized] = useState(false)

  const { comment } = props;

  let commentUrl = `${process.env.REACT_APP_COMMENTS_API_URL_DEVEL}${comment.id}` ;

  useEffect(() => {
    // Get liked comments from localstorage and compare to post id
    let likedComments = [];
    if(localStorage.getItem(`likedComments${comment.postId}`)) {
      likedComments = JSON.parse(localStorage.getItem(`likedComments${comment.postId}`));
        
        if(likedComments.includes(comment.id) && !initialized) {
            setCommentLiked(true);
            setHeartIconColor('red')
            setInitialized(true)
        };
    };
  }, [isCommentLiked]);

  const handleHeartIconClick = e => {
    // Mark comments as liked to local storage
    let likedCommentsInStorage = [];
    if(localStorage.getItem(`likedComments${comment.postId}`)) {
      likedCommentsInStorage = JSON.parse(localStorage.getItem(`likedComments${comment.postId}`));
    }

    if(!likedCommentsInStorage.includes(comment.id)) {
      likedCommentsInStorage.push(comment.id)
    }
    localStorage.setItem(`likedComments${comment.postId}`, JSON.stringify(likedCommentsInStorage));

    if (!isCommentLiked) {
      setHeartIconColor('red')
      updateLikes(++comment.likes);
      setCommentLiked(true)
    } else {
      updateLikes(--comment.likes)
      setHeartIconColor('default')
      setCommentLiked(false)
      localStorage.setItem(`likedComments${comment.postId}`, '')
    }
  }

  const updateLikes = (e) => {
    const tempComment = {author: comment.author, content: comment.content, date: comment.date, likes: comment.likes, postId: comment.postId}
    console.log(tempComment)
    axios
     .put(commentUrl, tempComment)
     .then(response => {
       console.log(response)
     }).catch(error => {
       alert(`${error}`)
   })
  }

  return (
    <div>
    <Media style={media}>
        <Media.Item as="figure" align="left">
            <FontAwesomeIcon size={'3x'} icon={faUserCircle} />
        </Media.Item>
        <Media.Item align="content">
            <Content>
                <p>
                <strong>{comment.author}</strong> <small>@{comment.author}</small>{' '}
                <small>{comment.date}</small>
                <br />
                {comment.content}
                </p>
            </Content>
                <Level breakpoint="mobile">
                    <Level.Item align="left">
                        <Level.Item>
                            <small>
                                <a href="#reply">Reply</a>
                            </small>
                        </Level.Item>
                        <Level.Item as="a">
                            <Icon size="small">
                                <FontAwesomeIcon color={heartIconColor} icon={faHeart} onClick={() => handleHeartIconClick()} />
                            </Icon>
                        </Level.Item>
                        <Content>
                            <small>{comment.likes}</small>
                        </Content>
                    </Level.Item>
            </Level>
        </Media.Item>
    </Media>
    </div>
  );
}