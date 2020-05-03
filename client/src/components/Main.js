import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Hero, Title, Container } from "rbx";

import GridView from "./GridView";

const hero = {
  'marginBottom': '50px'
};

export default function Main() {
  const [posts, setPosts] = useState([])

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

  posts.reverse();

    return (
        <div>
            <Hero color="primary" style={hero}>
              <Hero.Body>
                <Container>
                  <Title>FlotsamBlog</Title>
                  <Title as="h2" subtitle>
                    Read like you've never read before!
                  </Title>
                </Container>
              </Hero.Body>
            </Hero>
            <GridView posts={posts}></GridView>
        </div>
    );
}