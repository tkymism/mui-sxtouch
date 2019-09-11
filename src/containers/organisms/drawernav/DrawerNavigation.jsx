import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, } from '@material-ui/core/styles';
import NavBar from './NavBar';
import NavDrawer from './NavDrawer';
import NavContainer from './NavContainer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Nav = props => {
    const classes = useStyles();
    const { navigations, navigationTitle } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar 
          handleDrawerToggle = {handleDrawerToggle}
          navigationTitle = {navigationTitle} />
        <NavDrawer 
          handleDrawerToggle = {handleDrawerToggle}
          mobileOpen = {mobileOpen}
          navigations = {navigations}/>
        <NavContainer>{props.children}</NavContainer>
      </div>
    );
}

export default Nav;