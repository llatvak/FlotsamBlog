import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar'
import BlogPost from './components/BlogPost'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './App.css';

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

export default function App() {

  const classes = useStyles();
  return (
    <CssBaseline>
    <Container maxWidth="lg">
      <NavBar title="FlotsamBlog" categories={categories}/>
      <Grid container className={classes.root} spacing={1}>
            {featuredPosts.map(post => (
              <BlogPost key={post.title} post={post} />
            ))}
      </Grid>
    </Container>
    </CssBaseline>
  );
}