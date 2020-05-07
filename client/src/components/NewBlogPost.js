import React, { useState, useEffect } from "react";
import { Input, Field, Button, Box, Label, Control, Textarea, Select, Container, Help, Icon, Divider, Media, Image} from "rbx";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import Modali, { useModali } from 'modali';

const box = {
    margin: '60px',
};

const button = {
    marginRight: '20px',
};

const buttonControls = {
    marginTop: '20px',
};


export default function NewBlogPost(props) {

    let postUrl = process.env.REACT_APP_POSTS_API_URL_PROD;
    let categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_PROD;

    if(process.env.NODE_ENV !== 'production') {
        postUrl = process.env.REACT_APP_POSTS_API_URL_DEVEL;
        categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_DEVEL;
    }

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/1600x900/?technology');
    const [imageSrc, setImageSrc] = useState('https://source.unsplash.com/random/1600x900/?technology');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [date, setDate] = useState(new Date());
    const [dateMonthYear, setDateMonthYear] = useState(`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`)
    const [edited, setEdited] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const [previewHidden, setPreviewHidden] = useState(true);

    const history = useHistory();

    const [publishModal, togglePublishModal] = useModali({
        animated: true,
        title: `Publish a new post?`,
        message: 'Post will be public',
        buttons: [
          <Modali.Button
            label="Cancel"
            isStyleCancel
            onClick={() => togglePublishModal()}
          />,
          <Modali.Button
            label="Publish"
            isStyleDefault
            onClick={() => handlePostPublish()}
          />,
        ],
      });

      const [cancelModal, toggleCancelModal] = useModali({
        animated: true,
        title: `Cancel and go to dashboard?`,
        message: 'All modified data will be lost',
        buttons: [
          <Modali.Button
            label="Continue writing"
            isStyleCancel
            onClick={() => toggleCancelModal()}
          />,
          <Modali.Button
            label="Go to dashboard"
            isStyleDestructive
            onClick={() => handleCancel()}
          />,
        ],
      });

    useEffect(() => {
        axios
         .get(categoryUrl)
         .then(response => {
            setCategories(response.data);
         }).catch(error => {
           alert(`Backend error: ${error}`)
       })

       if(props.location.state !== undefined) {
            const postData = props.location.state.postData;
            setId(postData.id);
            setTitle(postData.title);
            setDescription(postData.description);
            setBody(postData.body);
            setImageUrl(postData.imageUrl);
            setSelectedCategory(postData.category);
            setDateMonthYear(postData.date);
            setEdited(true);
        }
     }, [])



    const handleChangeTitle = e => {
        setTitle(e.target.value);
    }

    const handleChangeBody = e => {
        let shortDesc = e.target.value.substring(0, 40);
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

   const handlePostPublish = e => {
        if(!edited) {
            setDate(new Date());
            axios
            .post(postUrl, blogpost)
            .then(response => {
                alert(`Post ${blogpost.title} created`);
                history.push({
                    pathname: '/dashboard',
                })
            })
            .catch(error => {
                 console.log(error);
                alert(`Error: Post '${blogpost.title}' was not posted`)
            })
       } else {
            postUrl = postUrl + `${id}`
            axios
            .put(postUrl, blogpost)
            .then(response => {
                history.push({
                    pathname: '/dashboard',
                })
                alert(`Post ${blogpost.title} updated`);
            })
            .catch(error => {
                 console.log(error);
                alert(`Error: Post '${blogpost.title}' was not updated`)
            })
       }
    }

    const handleCancel = () => {
        togglePublishModal()
        history.push({
            pathname: '/dashboard',
        })
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
                <form onSubmit={handleSubmit(togglePublishModal)}>
                    <Field>
                        <Label>Title</Label>
                        <Control>
                            <Input 
                                name="Title"
                                placeholder="Post title"
                                value={title}
                                onChange={handleChangeTitle}
                                ref={register({required: true, minLength: 10, maxLength: 60})}
                            />
                            <Help color={'danger'}>{errors.Title?.type === 'required' && "Title is required"}</Help>
                            <Help color={'danger'}>{errors.Title?.type === 'minLength' && "Title is too short"}</Help>
                            <Help color={'danger'}>{errors.Title?.type === 'maxLength' && "Title is too long"}</Help>
                            <Help color={'danger'}>{errors.Title?.type === 'pattern' && "Must start with capital letter"}</Help>
                        </Control>
                    </Field>

                    <Field>
                        <Label>Body</Label>
                        <Control>
                            <Textarea 
                                name="Body"
                                rows={15}
                                placeholder="Write here"
                                value={body}
                                onChange={handleChangeBody}
                                ref={register({required: true, minLength: 10, maxLength: 5000})}
                            />
                            <Help color={'danger'}>{errors.Body?.type === 'required' && "Body is required"}</Help>
                            <Help color={'danger'}>{errors.Body?.type === 'minLength' && "Body is too short"}</Help>
                            <Help color={'danger'}>{errors.Body?.type === 'maxLength' && "Body is too long"}</Help>
                        </Control>
                    </Field>

                    <Field>
                        <Label>Category</Label>
                        <Control>
                            <Select.Container>
                                <Select onChange={handleChangeCategory}>
                                    {categories.map(category => (
                                        <Select.Option key={category.title} value={category.title}>{category.title}</Select.Option>
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
                                <Input as={Button} type="submit" color="link" >Publish</Input>
                                <Button text onClick={toggleCancelModal} >Cancel</Button>
                            </Button.Group>
                        </Control>
                    </Field>
                </form>
                <Modali.Modal {...cancelModal} />
                <Modali.Modal {...publishModal} />
            </Box>
            </Container>

        </div>
    );
}