import React, { useState, useEffect } from "react";
import { Table, Input, Box, Control, Button, Title, Icon, Field, Label } from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import NavBar from "./NavBar";

const box = {
  'margin': 'auto',
  'padding': '50px',
  'marginTop': '50px',
  'maxWidth': '80%'
};



export default function Dashboard(props) {
  const [posts, setPosts] = useState([])

  let shortDescription = '';

  let url = `https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts/`;

  if(process.env.NODE_ENV === 'production') {
     url = `https://flotsamblog.herokuapp.com/api/posts/`;
  }


   useEffect(() => {
    axios
     .get(url)
     .then(response => {
       setPosts(response.data);
       console.log(response);
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
}

function shorten(description) {
  return shortDescription = description.substring(0, 40) + '...'
}


  return (
    <div>
      <NavBar />
      <Box style={box}>
        <Title>Dashboard</Title>
        <Button as={Link} to="/new" color="primary" >New post</Button>

        <Label>All posts</Label>
        <Field kind="addons">
          <Control>
              <Input placeholder="Search" />
          </Control>
          <Control>
              <Button color="info">
                  <Icon>
                      <FontAwesomeIcon icon={faSearch} />
                  </Icon>
              </Button>
          </Control>
        </Field>

        <Table bordered fullwidth>
          <Table.Head>
            <Table.Row>
              <Table.Heading>ID</Table.Heading>
              <Table.Heading>Title</Table.Heading>
              <Table.Heading>Description</Table.Heading>
              <Table.Heading>Date</Table.Heading>
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
                <Button color="info">
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
    </div>
  );
}