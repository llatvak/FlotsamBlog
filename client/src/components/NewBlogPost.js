import React, { useState, useEffect } from "react";
import { Input, Field, Button, Box, Label, Control, Textarea  } from "rbx";
import NavBar from "./NavBar";
import axios from 'axios';

const boxStyle = {
    margin: '60px',
};

const buttonStyle = {
    marginRight: '20px',
};

export default function BlogPost(props) {

    const url = 'http://localhost:8080/posts';
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const dateMonthYear = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`


    const handleChangeTitle = e => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = e => {
        setDescription(e.target.value);
    }

   const handleSubmit = event => {
        setDate(new Date());
        event.preventDefault();
        axios
            .post(url, blogpost)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                alert(`Error: Post '${blogpost.title}' was not posted`)
            })
            console.log('submit');
    }

    const blogpost = {
        title: title,
        description: description,
        image: "https://source.unsplash.com/random",
        date: dateMonthYear,
        category: "food"
    }

    return (
        <div>
            <NavBar />
            <Box style={boxStyle}>
                <Field>
                    <Label>Title</Label>
                    <Control>
                        <Input 
                            placeholder="Your title"
                            value={title}
                            onChange={handleChangeTitle}
                        />
                    </Control>

                    <Label>Body</Label>
                    <Control>
                        <Textarea 
                            placeholder="Write here"
                            value={description}
                            onChange={handleChangeDescription}
                        />
                    </Control>
                    
                    <Control>
                        <Button style={buttonStyle} color="danger">Cancel</Button>
                        <Button onClick={handleSubmit} style={buttonStyle} color="success" >Post</Button>
                    </Control>
                </Field>
            </Box>
        </div>
    );
}