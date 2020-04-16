import React, { useState, useEffect } from "react";
import { Title, Container, Button } from "rbx";
import { Link } from "react-router-dom";

import GridView from "./GridView";

export default function SearchResults(props) {
    const [posts, setPosts] = useState([])
    
    const button = {
        marginTop: '20px',
    };

    useEffect(() => {
       if(props.location.state !== undefined) {
            const postData = props.location.state.results;
            setPosts(postData);
        }
     }, [])

    return (
        <div>
            <Container>
                <Title>Results: {posts.length} </Title>
                <GridView posts={posts}></GridView>
                <Button style={button} as={Link} to="/" >Back</Button>
            </Container>
        </div>
    );
}