import React, { useState, useEffect } from "react";
import { Input, Field, Button, Box, Label, Control, Textarea, Select, Container, File, Icon, Divider, Media, Image } from "rbx";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faImage } from '@fortawesome/free-solid-svg-icons'

const box = {
    margin: '60px',
};

const button = {
    marginRight: '20px',
};

const buttonControls = {
    marginTop: '20px',
};

export default function BlogPost(props) {

    let postUrl = 'https://flotsamblog.herokuapp.com/api/posts';
    let categoryUrl = 'https://flotsamblog.herokuapp.com/api/categories';

    if(process.env.NODE_ENV !== 'production') {
        postUrl = 'https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts';
        categoryUrl = 'https://my-json-server.typicode.com/mkauha/JSON-server-demo/categories';
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('https://bulma.io/images/placeholders/128x128.png');
    const [imageSrc, setImageSrc] = useState('https://bulma.io/images/placeholders/128x128.png');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [date, setDate] = useState(new Date());
    const dateMonthYear = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    useEffect(() => {
        axios
         .get(categoryUrl)
         .then(response => {
            setCategories(response.data);
         }).catch(error => {
           alert(`Backend error: ${error}`)
       })

     }, [])

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    }

    const handleChangeBody = e => {
        let shortDesc = e.target.value.substring(0, 40) + '...';
        setDescription(shortDesc);
        setBody(e.target.value);
    }

    const handleChangeCategory = e => {
        e.preventDefault();
        setSelectedCategory(e.target.value);
    }

    const handleChangeImageUrl = e => {
        e.preventDefault();
        setImageSrc(e.target.value);
    }
    
    const handleAddImageUrl = e => {
        e.preventDefault();
        setImageUrl(imageSrc);
    }

   const handleSubmit = event => {
        setDate(new Date());
        event.preventDefault();
        axios
            .post(postUrl, blogpost)
            .then(response => {
                console.log(response);
                alert(`Post ${blogpost.title} created`);
            })
            .catch(error => {
                alert(`Error: Post '${blogpost.title}' was not posted`)
            })
            console.log('submit');
    }

    const handlePreview = event => {
        event.preventDefault();
    }

    const renderImage = () => {
        return (
            <a href={imageUrl} target="_blank" rel='noreferrer noopener'>
            <Image
                alt="Image preview"
                src={imageUrl}>
            </Image>
            </a>
        );
    }

    const blogpost = {
        title: title,
        description: description,
        body: body,
        imageUrl: imageUrl,
        date: dateMonthYear,
        category: selectedCategory,
        url: postUrl
    }

    return (
        <div>
            <Container breakpoint="touch">
            <Box style={box} >
                <form>
                    <Field>
                        <Label>Title</Label>
                        <Control>
                            <Input 
                                placeholder="Post title"
                                value={title}
                                onChange={handleChangeTitle}
                                required
                            />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Body</Label>
                        <Control>
                            <Textarea 
                                rows={15}
                                placeholder="Write here"
                                value={body}
                                onChange={handleChangeBody}
                                required
                            />
                        </Control>
                    </Field>

                    <Field>
                        <Label>Category</Label>
                        <Control>
                            <Select.Container>
                                <Select onChange={handleChangeCategory}>
                                <Select.Option>None</Select.Option>
                                    {categories.map(cat => (
                                        <Select.Option key={cat.id} value={cat.title}>{cat.title}</Select.Option>
                                    ))}
                                </Select>
                            </Select.Container>
                        </Control>
                    </Field>

                    <Label>Image</Label>
                    <Field kind="addons">
                        <Control iconLeft>
                            <Input 
                                placeholder="Image URL"
                                onChange={handleChangeImageUrl}
                            />
                            <Icon size="small" align="left">
                                <FontAwesomeIcon icon={faImage} />
                            </Icon>
                        </Control>
                        <Control>
                            <Button onClick={handleAddImageUrl} color="link" >Add</Button>
                        </Control>
                    </Field>
                    <Field>
                        <File>
                            <File.Label>
                                <File.Input name="image" />
                                <File.CTA>
                                <File.Icon>
                                    <FontAwesomeIcon icon={faUpload} />
                                </File.Icon>
                                <File.Label as="span">Choose an Image</File.Label>
                                </File.CTA>
                            </File.Label>
                        </File>
                    </Field>

                    <Media>
                    <Media.Item as="figure" align="left">
                        <Image.Container as="p" size={128}>
                            {renderImage()}
                        </Image.Container>
                    </Media.Item>
                    </Media>

                    <Divider></Divider>
                    
                    <Field kind="group">
                        <Control style={buttonControls}>
                            <Button.Group>
                                <Button onClick={handleSubmit} color="link" >Publish</Button>
                                <Button onClick={handlePreview} >Preview</Button>
                                <Button text as={Link} to="/" >Cancel</Button>
                            </Button.Group>
                        </Control>
                    </Field>
                </form>
            </Box>
            </Container>
        </div>
    );
}