import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    appbar: {
        padding: 5,
        justify: "space-between",
      },
    title: {
        flexGrow: 1,
    },
    toolbarCategories: {

    },
    toolbarUserActions: {
        
    }
  });

const NavBar = (props) => {

    const { categories, title } = props;
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        return setClicked(true);
      }

    return (

        <div>
        <AppBar className={classes.appbar} position="static">
            <Toolbar>
                <Typography className={classes.title} variant="title" color="inherit" >
                {title}
                </Typography>
                <Toolbar className={classes.toolbarUserActions}>
                    <Button variant="contained" color="secondary" component={RouterLink} to="/new">
                        New post
                    </Button>
                </Toolbar>
            </Toolbar>
        </AppBar>
        
        </div>
    )
}
export default NavBar;