import React from 'react'
import { Card, Button, Heading } from "react-bulma-components";

export default function BlogPost(props) {
    const { post } = props;

    function onReadMore(event) {
        console.log('Read more');
    }

    function onDelete(event) {
        console.log('delete');
    }

    return (
        <div>
            <Card>
                <Card.Image size='4by3' src='https://source.unsplash.com/random'></Card.Image>

                <Card.Content>
                    <Heading>{post.title}</Heading>
                    <Heading subtitle="true">{post.description}</Heading>
                    <Button color="primary" onClick={onReadMore}>Read more</Button>
                    <Button color="danger" onClick={onDelete}>Delete</Button>
                </Card.Content>
                <Card.Footer>
                    {post.date}
                </Card.Footer>

            </Card>
        </div>
    );
}