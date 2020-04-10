import React, { useState, useEffect } from "react";
import { Column, Container } from "rbx";
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';

import BlogPostPreview from "./BlogPostPreview";
import NavBar from "./NavBar";

export default function Main() {
  const [posts, setPosts] = useState([])
  let url = 'https://flotsamblog.herokuapp.com/api/posts';

  if(process.env.NODE_ENV !== 'production') {
      url = 'https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts';
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


    return (
        <div>

        <Container>
            <Column.Group vcentered multiline>
                {posts.map(post => (
                    <Column key={post.id} size="one-third">
                        <BlogPostPreview key={post.id} post={post} />
                    </Column>
                ))}
            </Column.Group>
        </Container>
        </div>
    );
}