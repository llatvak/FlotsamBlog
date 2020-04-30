import React, { useState, useEffect } from "react";
import { Title, Container, Button } from "rbx";
import { Link } from "react-router-dom";

import GridView from "./GridView";

export default function SearchResults(props) {
    const [posts, setPosts] = useState([])
    const [postFilter, setPostFilter] = useState('');

    const container = {
        'marginTop': '20px'
    };

    const button = {
        marginTop: '20px',
    };

    useEffect(() => {
       if(props.location.state !== undefined) {
            const postData = props.location.state.results;
            const queryData = props.location.state.query;
            setPosts(postData);
            setPostFilter(queryData);
        }
     }, [])

    return (
        <div>
            <Container style={container}>
                <Title>"{postFilter}"</Title>
                <Title>Results: {posts.length} </Title>
                <GridView posts={posts}></GridView>
                <Button style={button} as={Link} to="/" >Back</Button>
            </Container>
        </div>
    );
}