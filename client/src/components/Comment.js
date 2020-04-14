import React, { useState } from "react";
import { Content, Media, Level, Icon } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'

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

export default function Comment(props) {
  let [heartIconColor, setHeartIconColor] = useState('default')

  const { comment } = props;

  const handleHeartIconClick = e => {
    if (heartIconColor === 'default') {
      setHeartIconColor('red')
      comment.likes++;
    } else {
      setHeartIconColor('default')
      comment.likes--;
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
                <strong>{comment.author}</strong> <small>@{comment.author}</small>{' '}
                <small>{comment.date}</small>
                <br />
                {comment.body}
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