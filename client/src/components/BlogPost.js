import React from 'react'
import { Card, Button, Heading } from "react-bulma-components";

export default function BlogPost(props) {
    const { post } = props;

    return (
        <div>
            <Card>
                <Card.Image size='4by3' src='https://source.unsplash.com/random'></Card.Image>

                <Card.Content>
                    <Heading>{post.title}</Heading>
                    <Heading subtitle="true">{post.body}</Heading>
                    <Button color="primary">Read more</Button>
                </Card.Content>
                <Card.Footer>
                    {post.date}
                </Card.Footer>

            </Card>
        </div>
    );
}