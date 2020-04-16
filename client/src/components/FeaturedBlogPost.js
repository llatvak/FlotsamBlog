import React, { useState, useEffect } from "react";
import { Card, Button, Title, Image, Icon } from "rbx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const readCheckIcon = {
    marginTop:'7px'
};

export default function FeaturedBlogPost(props) {

    const { post } = props;
    const [ isPostRead, setIsPostRead ] = useState(false);


    let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${post.id}`;

    if(process.env.NODE_ENV !== 'production') {
        url = process.env.REACT_APP_POSTS_API_URL_DEVEL + `${post.id}`;
    }

    const route = `/posts/${post.id}`

    React.useEffect(() => {
        // Get read posts from localstorage and compare to post id
        var readPosts = [];

        if(localStorage.getItem("readPosts")) {
            readPosts = JSON.parse(localStorage.getItem("readPosts"));
            
            if(!readPosts.includes(post.id)) {
                setIsPostRead(true);
            };
        };

      }, [isPostRead]);

    function onReadMore(event) {
        // Mark post as read to local storage
        var readPostsInStorage = [];
        if(localStorage.getItem("readPosts")) {
            readPostsInStorage = JSON.parse(localStorage.getItem("readPosts"));
        };

        if(!readPostsInStorage.includes(post.id)) {
            readPostsInStorage.push(post.id)
        };

        localStorage.setItem('readPosts', JSON.stringify(readPostsInStorage));
    }

    function renderReadIcon() {
        if(!isPostRead) {
            return (
                <Icon  style={readCheckIcon} >
                    <FontAwesomeIcon icon={faCheckCircle} />
                </Icon>
            );
        }
    }

    return (
        <div>
            <Card>
                <Card.Image size='16by9'>
                    <Image.Container size='16by9'>
                        <Image src={post.imageUrl} />
                    </Image.Container>
                </Card.Image>

                <Card.Content>
                    <Title size={4}>{post.title}</Title>
                    <Title subtitle>{post.description}</Title>
                    <Button as={Link} to={route} color="primary" onClick={onReadMore}>Read more</Button>
                    {renderReadIcon()}
                </Card.Content>
                <Card.Footer>
                    {post.date}
                </Card.Footer>

            </Card>
        </div>
    );
}