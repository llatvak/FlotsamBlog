import React, { useState, useEffect } from "react";
import { Navbar, Button, Control, Input, Field, Icon} from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(props) {
    const { category } = props;
    const [navbarOpen, setNavbarOpen] = useState(true);
    const [categories, setCategories] = useState([])

    const url = 'http://localhost:8080/api/posts';


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
                    <Navbar.Item>
                        <img src="logo.png" alt="logo" />
                    </Navbar.Item>
                <Navbar.Burger onClick={() => setNavbarOpen(!navbarOpen)}/>
                </Navbar.Brand>
                
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                         {categories.map(category => (
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
                        <Navbar.Item>
                            <Button as={Link} to="/newpost" color="primary" >New post</Button>
                        </Navbar.Item>
                    </Navbar.Segment>

                </Navbar.Menu>
            </Navbar>
        </div>
    );
}