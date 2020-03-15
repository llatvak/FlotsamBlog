import React, { useState }from 'react'
import { Navbar, Button, Control, Input, Field, Form, Icon} from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function NavBar(props) {
    const { post } = props;

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
                    <Navbar.Container position="start">
                        <Navbar.Link arrowless="true">
                            One
                        </Navbar.Link>
                        <Navbar.Link arrowless="true">
                            Two
                        </Navbar.Link>
                        <Navbar.Link arrowless="true">
                            Three
                        </Navbar.Link>
                    </Navbar.Container>

                    <Navbar.Container position="end">
                        <Navbar.Item>
                        <Form.Field kind="addons">
                            <Form.Control>
                                <Form.Input placeholder="Search post" />
                            </Form.Control>
                            <Form.Control>
                                <Button color="primary">
                                    <Icon>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Icon>
                                </Button>
                            </Form.Control>
                        </Form.Field>

                        </Navbar.Item>

                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link>
                                
                            </Navbar.Link>
                            <Navbar.Dropdown right="false">
                                <Navbar.Item>
                                    <Button color="primary">New post</Button>
                                </Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        </div>
    );
}