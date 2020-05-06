import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Hero, Title, Container, Button, Icon } from "rbx";

import GridView from "./GridView";

const hero = {
  'marginBottom': '50px'
};

const backtToTopButton = {
  'bottom': '20px',
  'right': '20px',
  'position': 'fixed',
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

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
            <div>
              <Button style={backtToTopButton} onClick={scrollToTop} color={'primary'}>
                <Icon size="small">
                  <FontAwesomeIcon icon={faChevronUp} />
                </Icon>
              </Button>
            </div>
        </div>
    );
}