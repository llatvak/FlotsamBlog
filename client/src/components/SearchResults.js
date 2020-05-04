import React, { useState, useEffect  } from "react";
import { Title, Container, Button } from "rbx";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import GridView from "./GridView";


export default function SearchResults(props) {
    const [filteredPosts, setFilteredPosts] = useState([]);
    
    let queryData = props.location.state.query;
    let history = useHistory();
    
    let postUrl = process.env.REACT_APP_POSTS_API_URL_PROD;

    if(process.env.NODE_ENV !== 'production') {
        postUrl = process.env.REACT_APP_POSTS_API_URL_DEVEL;
    }

    const container = {
        'marginTop': '20px'
    };

    const button = {
        marginTop: '20px',
    };


    useEffect(() => {
        if(props.location.state !== undefined) {
            queryData = props.location.state.query;
            axios
            .get(postUrl)
            .then(response => {
                setFilteredPosts(filter(response.data, queryData)); 
            }).catch(error => {
              alert(`${error}`)
          })
        }
     }, [props.location.state.query])


     const handleClickBack = e => {
        history.goBack()
    }

    const filter = (posts, postFilter) => {
        let filtered = []
        filtered = posts.filter( (post) => {
          return post.title.toLowerCase().indexOf(postFilter.toLowerCase())!==-1 || post.category.toLowerCase().indexOf(postFilter.toLowerCase())!==-1
        })
        return filtered;
    }


    return (
        <div>
            <Container style={container}>
                <Title>"{queryData}"</Title>
                <Title>Results: {filteredPosts.length} </Title>
                <GridView posts={filteredPosts}></GridView>
                <Button style={button} onClick={handleClickBack} >Back</Button>
            </Container>
        </div>
    );
}