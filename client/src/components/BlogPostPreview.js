import React from 'react'
import { Card, Button, Title, Image } from "rbx";

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
                <Card.Image size='4by3'>
                    <Image.Container size="4by3">
                        <Image src="https://source.unsplash.com/random" />
                    </Image.Container>
                </Card.Image>

                <Card.Content>
                    <Title>{post.title}</Title>
                    <Title subtitle="true">{post.description}</Title>
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