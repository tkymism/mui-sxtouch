import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import MenuList from '../../components/molecules/MenuList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  drawerPaper: {
    width: drawerWidth
  },

}));

const NavigationBar = props => {
  const { classes, handleDrawerToggle, navigationTitle } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap> { navigationTitle } </Typography> 
      </Toolbar>
    </AppBar>
  );
}

const NavigationContainer = props =>{
  const { classes } = props;
  return (
      <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
      </main>
  );
}

const NavigationDrawer = props => {
  const theme = useTheme();
  const { 
    classes, handleDrawerToggle, 
    mobileOpen, navigations,  } = props;
  return (
    <nav className={classes.drawer} aria-label="navigation area">
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: classes.drawerPaper, }}
        ModalProps={{ keepMounted: true, }}
      >
        <div className={classes.toolbar}/>
        <MenuList navigations={navigations} />
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        <div className={classes.toolbar}/>
        <MenuList navigations={navigations} />
      </Drawer>
    </Hidden>
    </nav>
  );
}

const NavigationRoot = props => {
    const classes = useStyles();
    const { navigations, navigationTitle } = props;
    const [ mobileOpen, setMobileOpen ] = React.useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavigationBar 
          classes = {classes}
          handleDrawerToggle = {handleDrawerToggle}
          navigationTitle = {navigationTitle} />
        <NavigationDrawer 
          classes = {classes}
          handleDrawerToggle = {handleDrawerToggle}
          mobileOpen = {mobileOpen}
          navigations = {navigations}/>
        <NavigationContainer
          classes = {classes}
          >{props.children}</NavigationContainer>
      </div>
    );
}

export default NavigationRoot;