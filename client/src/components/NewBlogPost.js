import React from 'react'
import { Box, Button, Form } from "react-bulma-components";
import NavBar from "./NavBar";

export default function BlogPost(props) {

    return (
        <div>
            <NavBar></NavBar>
            <Box>
                <Form.Field>
                    <Form.Label>Title</Form.Label>
                    <Form.Control>
                        <Form.Input placeholder="Your title" />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Body</Form.Label>
                    <Form.Control>
                        <Form.Textarea placeholder="Write here" />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Control>
                        <Button color="danger">Cancel</Button>
                        <Button color="success">Post</Button>
                    </Form.Control>
                </Form.Field>
            </Box>
        </div>
    );
}