import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import NavBar from './NavBar'
import BlogPost from './BlogPost'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


const categories = [
  { title: 'Category 1', url: '#' },
  { title: 'Category 2', url: '#' },
  { title: 'Category 3', url: '#' },
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Featured post',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Featured post',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Mar 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },

];

export default function Main() {

  const classes = useStyles();
  return (
    <div>
      <NavBar title="Flotsam" categories={categories}/>
      <Container maxWidth="lg">
        <Grid container className={classes.root} spacing={1}>
              {featuredPosts.map(post => (
                <BlogPost key={post.title} post={post} />
              ))}
        </Grid>
      </Container>
    </div>
  );
}