import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

import NavBar from './NavBar'

const useStyles = makeStyles(theme => ({
  backgroundPaper: {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.grey[700],
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    maxWidth: 700,
  
  },
  textfieldTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  textfieldBody: {
    marginBottom: theme.spacing(4),

  },
}));

const NewPost = (props) => {
    const classes = useStyles();
    const { categories, title } = props;

    const [value, setValue] = React.useState('');

    const onTitleChange = event => {
      
    };
    const onBodyChange = event => {
      
    };

    return (
        <Paper className ={classes.backgroundPaper} elevation={2}>
      
        <Grid container>
        <Grid item sm={12}>
          <TextField className ={classes.textfieldTitle}
          id="filled-multiline-flexible"
          label="Title"
          rowsMax="1"
          value={value}
          onChange={onTitleChange}
          fullWidth
          variant="filled"/>
        
        <TextField  className ={classes.textfieldBody}
          id="filled-multiline-flexible"
          label="Body"
          multiline
          rowsMax="120"
          rows={20}
          value={value}
          onChange={onBodyChange}
          fullWidth
          variant="filled"/>
        <Button variant="contained" color="secondary" >
            Publish
        </Button>
        </Grid>
      </Grid>
        </Paper>
      
    )
}
export default NewPost;