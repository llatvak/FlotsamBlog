import React, { useState, useEffect } from "react";
import { Navbar, Button, Control, Input, Field, Icon, Image} from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const tempCategories = [
    { title: 'Food', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Travel', url: '#' },
  ];

export default function NavBar(props) {
    const { category } = props;
    const [navbarOpen, setNavbarOpen] = useState(true);
    const [categories, setCategories] = useState([])

    let url = 'https://flotsamblog.herokuapp.com/api/posts';

    if(process.env.NODE_ENV !== 'production') {
        url = 'https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts';
    }

    useEffect(() => {
        axios
         .get(url)
         .then(response => {
            setCategories(response.data);
         }).catch(error => {
           alert(`Backend error: ${error}`)
       })
     }, [])
    return (
        <div>
            <Navbar active={navbarOpen} >
                <Navbar.Brand>
                    <Navbar.Item as={Link} to="/">
                        <Image src="logo.png" />
                    </Navbar.Item>
                <Navbar.Burger onClick={() => setNavbarOpen(!navbarOpen)}/>
                </Navbar.Brand>
                
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                         {tempCategories.map(category => (
                            <Navbar.Item key={category.title}>
                                {category.title}
                            </Navbar.Item>
                        ))}
                    </Navbar.Segment>

                    <Navbar.Segment align="end">
                        <Navbar.Item>
                        <Field kind="addons">
                            <Control>
                                <Input placeholder="Search post" />
                            </Control>
                            <Control>
                                <Button color="primary">
                                    <Icon>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Icon>
                                </Button>
                            </Control>
                        </Field>

                        </Navbar.Item>
                        <Navbar.Item as={Link} to="/user/login">
                            <Button color="primary" >
                                <Icon>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Icon>
                            </Button>
                        </Navbar.Item>
                    </Navbar.Segment>

                </Navbar.Menu>
            </Navbar>
        </div>
    );
}