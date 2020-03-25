import React, { useState }from 'react'
import { Navbar, Button, Control, Input, Field, Icon} from "rbx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import useFetch from "./controllers/FetchRequest";

export default function NavBar(props) {
    const { category } = props;
    const data = useFetch('https://my-json-server.typicode.com/mkauha/demo/categories');
    const [navbarOpen, setNavbarOpen] = useState(true);

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
                         {data.map(category => (
                            <Navbar.Item arrowless="true">
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