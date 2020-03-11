import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    appbar: {
        padding: 10,
      },
  });

const NavBar = (props) => {

    const { categories, title } = props;
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;