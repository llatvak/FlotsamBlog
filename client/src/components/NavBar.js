import React, { useState, useEffect } from "react";
import { Navbar, Icon, Image} from "rbx";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle } from '@fortawesome/free-solid-svg-icons'

import Search from './SearchBar'

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    let history = useHistory();

    let categoryUrl = process.env.REACT_APP_CATEGORIES_API_URL_PROD;

    if(process.env.NODE_ENV !== 'production') {
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

    const handleClickCategory = e => {
        history.push({
                    pathname: '/search',
                    state: { query: e.target.firstChild.data}
                    })
    }

    return (
        <div>
            <Navbar fixed='top' active={navbarOpen} >
                <Navbar.Brand>
                    <Navbar.Item as={Link} to="/">
                        <Image src="favicon.png" />
                    </Navbar.Item>
                <Navbar.Burger onClick={() => setNavbarOpen(!navbarOpen)}/>
                </Navbar.Brand>
                
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                         {categories.map(category => (
                            <Navbar.Item
                            key={category.id}
                            onClick={handleClickCategory}>
                                {category.title}
                            </Navbar.Item>
                        ))}
                    </Navbar.Segment>

                    <Navbar.Segment align="end">
                        <Navbar.Item as='div'>
                            <Search></Search>
                        </Navbar.Item>

                        <Navbar.Item as='div'>
                            <Icon as={Link} to="/dashboard" color={'primary'}>
                                <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                            </Icon>
                        </Navbar.Item>
                    </Navbar.Segment>

                </Navbar.Menu>
            </Navbar>
        </div>
    );
}