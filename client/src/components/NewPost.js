import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import NavBar from './NavBar'

const useStyles = makeStyles({
    
  });

const NewPost = (props) => {
    const classes = useStyles();
    const { categories, title } = props;

    return (
      <div>
        <NavBar title="Flotsam" categories={categories}/>
        <Container maxWidth="lg">
          <Grid container className={classes.root} spacing={1}>
            
          </Grid>
        </Container>
      </div>
    )
}
export default NewPost;