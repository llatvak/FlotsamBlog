import React, { useState, useEffect } from "react";
import { Table, Input, Box, Control, Button, Title, Icon, Field, Label, Container } from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSearch, faEdit, faComments, faSignOutAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../context/auth";

const container = {
  'padding': '16px'
};
const box = {
  'margin': 'auto',
  'padding': '50px',
  'marginTop': '50px',
  'width': '80%',
};
const newpostbutton = {
  'marginTop': '20px',
  'marginBottom': '20px',
};

export default function Dashboard(props) {
  const [posts, setPosts] = useState([])

  let shortDescription = '';
  const { setAuthTokens } = useAuth();

  let url = process.env.REACT_APP_POSTS_API_URL_PROD;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL;
  }

   useEffect(() => {
    axios
     .get(url)
     .then(response => {
       setPosts(response.data);
     }).catch(error => {
       alert(`${error}`)
   })
 }, []) 
 
 function onDelete(id, event) {
  console.log(`delete ${id}`);
  axios
      .delete(url + id)
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          alert(`Error: Post  was not deleted`)
      })

      let updatedPosts = [];
      for(let i = 0; i < posts.length; i++) {
        if (posts[i].id === id) {
            console.log(posts[i].id)
            posts.splice(i, 1)
            updatedPosts = posts.splice(0)
            break;
        }
      }
      setPosts(updatedPosts);
}

function shorten(description) {
  return shortDescription = description.substring(0, 40) + '...'
}

function logOut() {
  setAuthTokens("");
}

  return (
    <div>
      <Container breakpoint="mobile" style={container}>
      <Box style={box}>
      <Button.Group align="right" >
        <Button onClick={logOut} color="danger" >
        <Icon size="small">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Icon>
            <span>Logout</span>
          </Button>
      </Button.Group>
        <Title>Dashboard</Title>
        <Button style={newpostbutton} as={Link} to="new" color="primary" >
          <Icon size="small">
            <FontAwesomeIcon icon={faPen} />
          </Icon>
          <span>New post</span>
          </Button>

        <Label>All posts</Label>
        <Table fullwidth>
          <Table.Head>
            <Table.Row>
              <Table.Heading>ID</Table.Heading>
              <Table.Heading>Title</Table.Heading>
              <Table.Heading>Description</Table.Heading>
              <Table.Heading>Date</Table.Heading>
              <Table.Heading>Comments</Table.Heading>
              <Table.Heading>Edit</Table.Heading>
              <Table.Heading>Remove</Table.Heading>
            </Table.Row>
          </Table.Head>

          <Table.Body>
          {posts.map(post => (
            <Table.Row key={post.id}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>{post.title}</Table.Cell>
              <Table.Cell>{shorten(post.description)}</Table.Cell>
              <Table.Cell>{post.date}</Table.Cell>
              <Table.Cell>
                <Button color="info"
                    as={Link} to={{
                      pathname: '/comments',
                      state: { postData: post }
                    }}>
                  <Icon>
                      <FontAwesomeIcon icon={faComments} />
                  </Icon>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="info"
                    as={Link} to={{
                      pathname: '/edit',
                      state: { postData: post }
                    }}>
                  <Icon>
                      <FontAwesomeIcon icon={faEdit} />
                  </Icon>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="danger" onClick={(e) => onDelete(post.id, e)}>
                  <Icon>
                      <FontAwesomeIcon icon={faTrash} />
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Box>
      </Container>
    </div>
  );
}