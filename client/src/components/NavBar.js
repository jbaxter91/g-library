import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      color: "white",
    },
    title: {
        fontSize: "1.5rem",
      flexGrow: 1,
    },
  }));


const NavBar = props=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title}>Google Books</Typography>
                <Typography>
                    <Button className={classes.menuButton} href="/search">Search</Button>
                </Typography>
                <Typography>
                    <Button className={classes.menuButton} href="/">Saved</Button>
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;