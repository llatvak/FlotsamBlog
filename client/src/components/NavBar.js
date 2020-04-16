import React, { useState, useEffect } from "react";
import { Navbar, Icon, Image} from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Search from './SearchBar'

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    let postUrl = process.env.REACT_APP_POSTS_API_URL_PROD;
    let categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_PROD;

    if(process.env.NODE_ENV !== 'production') {
        postUrl = process.env.REACT_APP_POSTS_API_URL_DEVEL;
        categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_DEVEL;
    }

    useEffect(() => {
        axios
         .get(categoryUrl)
         .then(response => {
            setCategories(response.data);
         }).catch(error => {
           alert(`Backend error: ${error}`)
        })

     }, [])

    return (
        <div>
            <Navbar fixed='top' active={navbarOpen} >
                <Navbar.Brand>
                    <Navbar.Item as={Link} to="/">
                        <Image src="logo.png" />
                    </Navbar.Item>
                <Navbar.Burger onClick={() => setNavbarOpen(!navbarOpen)}/>
                </Navbar.Brand>
                
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                         {categories.map(category => (
                            <Navbar.Item key={category.id}>
                                {category.title}
                            </Navbar.Item>
                        ))}
                    </Navbar.Segment>

                    <Navbar.Segment align="end">
                        <Navbar.Item as='div'>
                            <Search></Search>
                        </Navbar.Item>

                        <Navbar.Item as='div'>
                            <Icon as={Link} to="/user/login">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </Icon>
                        </Navbar.Item>
                    </Navbar.Segment>

                </Navbar.Menu>
            </Navbar>
        </div>
    );
}