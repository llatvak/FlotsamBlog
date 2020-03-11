import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      maxWidth: 400,
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 410,
    },
  });

const BlogPost = (props) => {

    const { post, key } = props;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Post title
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardMedia className={classes.cardMedia}
            component="img"
            alt="Test image"
            height="140"
            image="https://source.unsplash.com/random"
            title="Test image"
          />
        <CardActions>
          <Button size="small" color="primary">
          Read more
          </Button>
          <Button size="small" color="primary">
            Comments
          </Button>
        </CardActions>
      </Card>
      </Grid>
    )
}
export default BlogPost;