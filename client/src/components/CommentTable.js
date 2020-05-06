import React, { useState, useEffect } from "react";
import { Table, Box, Button, Title, Icon, Label } from "rbx";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const box = {
  'margin': 'auto',
  'padding': '50px',
  'marginTop': '50px',
  'maxWidth': '80%'
};

export default function CommentTable(props) {
  const [posts, setPosts] = useState([])

  let url = process.env.REACT_APP_POSTS_API_URL_PROD;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL;
  }

  return (
    <div>
      <Box style={box}>
        <Title>Comment Table</Title>

        <Label>All comments</Label>

        <Table fullwidth>
          <Table.Head>
            <Table.Row>
              <Table.Heading>ID</Table.Heading>
              <Table.Heading>Comment</Table.Heading>
              <Table.Heading>Likes</Table.Heading>
              <Table.Heading>Date</Table.Heading>
              <Table.Heading>Remove</Table.Heading>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row key={0}>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Nice post!</Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell>05.05.2020</Table.Cell>
              <Table.Cell>
                <Button color="danger">
                  <Icon>
                      <FontAwesomeIcon icon={faTrash} />
                  </Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </Box>
    </div>
  );
}