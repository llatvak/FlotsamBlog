import React, { useState, useEffect } from "react";
import { Column, Container } from "rbx";
import axios from 'axios';

import BlogPostPreview from "./BlogPostCard";
import NavBar from "./NavBar";




const featuredPosts = [
    {
      title: 'Post title #1',
      date: '11 April 2019',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title #2',
      date: '12 May 2020',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title #3',
      date: '13 June 2021',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title #4',
      date: '14 July 2022',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title #5',
      date: '15 August 2023',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title #6',
      date: '15 September 2024',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },

];

const categories = [
  { title: 'Category 1', url: '#' },
  { title: 'Category 2', url: '#' },
  { title: 'Category 3', url: '#' },
];


export default function Main() {
  const [posts, setPosts] = useState([])
  const url = 'http://localhost:8080/posts';
  
  useEffect(() => {
     axios
      .get(url)
      .then(response => {
        setPosts(response.data);
      }).catch(error => {
        alert(`Backend error: ${error}`)
    })
  }, [])

    return (
        <div>
        <NavBar />
        <Container>
            <Column.Group vcentered multiline>
                {posts.map(post => (
                    <Column size="one-third">
                        <BlogPostPreview key={post.title} post={post} />
                    </Column>
                ))}
            </Column.Group>
        </Container>

        </div>
    );
}