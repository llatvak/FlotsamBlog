import React from 'react'
import { Card, Button, Title, Image } from "rbx";
import { Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

export default function FeaturedBlogPost(props) {
    const { post } = props;


    let url = process.env.REACT_APP_POSTS_API_URL_PROD + `${post.id}`;

    if(process.env.NODE_ENV !== 'production') {
        url = process.env.REACT_APP_POSTS_API_URL_DEVEL + `${post.id}`;
    }

    const route = `/posts/${post.id}`

    function onReadMore(event) {
        //console.log('Read more ' + route);
    }

    return (
        <div>
            <Card>
                <Card.Image size='4by3'>
                    <Image.Container size="4by3">
                        <Image src="https://source.unsplash.com/random" />
                    </Image.Container>
                </Card.Image>

                <Card.Content>
                    <Title>{post.title}</Title>
                    <Title subtitle>{post.description}</Title>
                    <Button as={Link} to={route} color="primary" onClick={onReadMore}>Read more</Button>
                </Card.Content>
                <Card.Footer>
                    {post.date}
                </Card.Footer>

            </Card>
        </div>
    );
}