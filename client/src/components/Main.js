import React, { useState, useEffect } from "react";
import { Columns, Container } from "react-bulma-components";

import BlogPostPreview from "./BlogPostPreview";
import NavBar from "./NavBar";
import useFetch from "./useFetch";



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
  const data = useFetch('https://my-json-server.typicode.com/mkauha/demo/blogposts');
    return (
        <div>
        <NavBar />
        <Container>
            <Columns>
                {data.map(post => (
                    <Columns.Column size="one-third">
                        <BlogPostPreview key={post.title} post={post} />
                    </Columns.Column>
                ))}
            </Columns>
        </Container>

        </div>
    );
}