import React, { useState, useEffect } from "react";
import { Content, Title, Box, Image, Media, Level, Icon, Button, Field, Control, Textarea } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

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

export default function Comment() {
  const [heartAmount, setHeartAmount] = useState(0)
  let [heartIconColor, setHeartIconColor] = useState('default')

  let commentUrl = process.env.REACT_APP_COMMENTS_API_URL_DEVEL;

  const handleHeartIconClick = e => {
    if (heartIconColor === 'default') {
      setHeartIconColor('red')
      setHeartAmount(heartAmount + 1);
    } else {
      setHeartIconColor('default')
      setHeartAmount(heartAmount - 1);
    }
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
                <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                <small>31m</small>
                <br />
                Very cool post!
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
                            <Content>
                                <small>{heartAmount}</small>
                            </Content>
                        </Level.Item>
                    </Level.Item>
            </Level>
        </Media.Item>
    </Media>
    </div>
  );
}