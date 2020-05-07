import React, { useState, useEffect } from "react";
import { Table, Input, Box, Control, Button, Title, Icon, Field, Label, Container } from "rbx";
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSearch, faEdit, faComments, faSignOutAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../context/auth";
import Modali, { useModali } from 'modali';
import { useHistory } from "react-router-dom";

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
  const [postToDelete, setPostToDelete] = useState(-1)
  const [postToEdit, setPostToEdit] = useState(-1)

  const [deleteModal, toggleDeleteModal] = useModali({
    animated: true,
    title: `Delete post ${postToDelete}?`,
    message: 'Post will be permanently deleted.',
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleDeleteModal()}
      />,
      <Modali.Button
        label="Delete"
        isStyleDestructive
        onClick={() => onDelete(postToDelete)}
      />,
    ],
  });

  const [editModal, toggleEditModal] = useModali({
    animated: true,
    title: `Edit post ${postToEdit.id}?`,
    message: 'Post will be modified',
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleEditModal()}
      />,
      <Modali.Button
        label="Edit"
        isStyleDefault
        onClick={() => onEdit(postToEdit)}
      />,
    ],
  });

  const [logoutModal, toggleLogoutModal] = useModali({
    animated: true,
    title: `Log out?`,
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleLogoutModal()}
      />,
      <Modali.Button
        label="Log out"
        isStyleDestructive
        onClick={() => logOut()}
      />,
    ],
  });

  

  let history = useHistory();
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

 function onEdit(postData) {
  history.push({
    pathname: '/edit',
    state: { postData: postData }
    })
 }

 function onShowComments(postData) {
  history.push({
    pathname: '/comments',
    state: { postData: postData }
    })
 }
 
 function onDelete(id, event) {
  axios
      .delete(url + id)
      .then(response => {
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
      toggleDeleteModal();
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
        <Button onClick={toggleLogoutModal} color="danger" >
        <Icon size="small">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Icon>
            <span>Log out</span>
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
                <Button color="info" onClick={(e) => {onShowComments(post)}}>
                  <Icon>
                      <FontAwesomeIcon icon={faComments} />
                  </Icon>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="info" onClick={(e) => {
                  setPostToEdit(post)
                  toggleEditModal()
                  }}>
                  <Icon>
                      <FontAwesomeIcon icon={faEdit} />
                  </Icon>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="danger" onClick={(e) => {
                  setPostToDelete(post.id)
                  toggleDeleteModal()
                  }}>
                  <Icon>
                      <FontAwesomeIcon icon={faTrash} />
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Modali.Modal {...deleteModal} />
        <Modali.Modal {...editModal} />
        <Modali.Modal {...logoutModal} />
      </Box>
      </Container>
    </div>
  );
}