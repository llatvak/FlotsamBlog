import React, { useState, useEffect } from "react";
import { Card, Button, Title, Image, Icon, Level } from "rbx";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const title = {
};
const subtitle = {
    'marginTop': '10px'
};
const button = {
};

export default function FeaturedBlogPost(props) {

    const { post } = props;
    const [ isPostRead, setIsPostRead ] = useState(false);

    let history = useHistory();

    let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${post.id}`;

    if(process.env.NODE_ENV !== 'production') {
        url = process.env.REACT_APP_POSTS_API_URL_DEVEL + `${post.id}`;
    }

    const route = `/posts/${post.id}`

    useEffect(() => {
        // Get read posts from localstorage and compare to post id
        var readPosts = [];

        if(localStorage.getItem("readPosts")) {
            readPosts = JSON.parse(localStorage.getItem("readPosts"));
            
            if(!readPosts.includes(post.id)) {
                setIsPostRead(true);
            }
        } else {
            localStorage.setItem('readPosts', JSON.stringify(readPosts));
        }

      }, []);

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
                <span>
                <Button as={Link} to={route} color="light" onClick={onReadMore} style={button}>Read more</Button>
                </span>
            );
        } else {
            return (
                <span>
                <Button as={Link} to={route} color="primary" onClick={onReadMore} style={button}>Read more</Button>
                </span>
            );
        }
    }

    const handleClickCategory = e => {
        history.push({
                    pathname: '/search',
                    state: { query: e.target.lastChild.data }
                    })
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
                <Level>
                        <Level.Item align="left">{post.date}</Level.Item>
                        <Level.Item align="right" onClick={handleClickCategory}><a>{post.category}</a></Level.Item>
                </Level>
                    <span><Title as={Link} to={route} size={4} style={title} onClick={onReadMore}>{post.title}</Title></span>
                    <span><Title 
                        subtitle 
                        style={subtitle}
                        responsive={{
                            touch: { hide: { value: true } }
                          }}
                        >{post.description}</Title></span>
                </Card.Content>
                <Card.Content>
                    {renderReadIcon()}
                </Card.Content>
            </Card>
        </div>
    );
}