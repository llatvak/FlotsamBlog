import React, { useState, useEffect } from "react";
import { Column, Container } from "rbx";

import FeaturedBlogPost from "./FeaturedBlogPost";

const card = {
    'height': '100%'
};

export default function GridView(props) {

  const [posts, setPosts] = useState(props.posts)
  
  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts])

    return (
        <div>
        <Container>
            <Column.Group multiline>
                {posts.map(post => (
                    <Column key={post.id} size="one-third">
                        <FeaturedBlogPost key={post.id} post={post}/>
                    </Column>
                ))}
            </Column.Group>
        </Container>
        </div>
    );
}