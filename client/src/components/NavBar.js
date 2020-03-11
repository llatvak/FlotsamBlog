import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';

const NavBar = (props) => {

    const { categories, title } = props;

    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                {title}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;