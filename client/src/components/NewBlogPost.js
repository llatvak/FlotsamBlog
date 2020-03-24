import React from 'react'
import { Box, Button, Form } from "react-bulma-components";
import NavBar from "./NavBar";

const boxStyle = {
    margin: '60px',
};

const buttonStyle = {
    marginRight: '20px',
};

export default function BlogPost(props) {

    return (
        <div>
            <NavBar />
            <Box style={boxStyle}>
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
                        <Button style={buttonStyle} color="danger">Cancel</Button>
                        <Button style={buttonStyle} color="success">Post</Button>
                    </Form.Control>
                </Form.Field>
            </Box>
        </div>
    );
}