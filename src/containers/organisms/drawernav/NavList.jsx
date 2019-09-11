import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import NavListItem from './NavListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const NavListGroup = props => {
    const { group } = props;
    return (
        <div>
            <Divider/>
            <List>
                { group.map( (item, i) => <NavListItem key={i} item={item}/> )}
            </List>
        </div>
    );
}

const NavList = props => {
    const classes = useStyles();
    const { navigations } = props;
    return (
        <div>
            <div className={classes.toolbar} />
            { navigations.map( (group, i) => <NavListGroup key={i} group={group}/>)}
        </div>
    );
};

export default NavList;