import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link'
import NavListItemIcon from './NavListItemIcon';

const NavListItem = props => {
    const href = props.item.href;
    return href ? <ListItemLink {...props}/> : <ListItemBase {...props}/> ;
}

const ListItemLink = props => {
    const href = props.item.href;
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <ListItemBase {...props} />
        </Link>
    );
}

const ListItemBase = props => {
    const { index, item } = props;
    return (
        <ListItem button key={index}>
            <NavListItemIcon iconname={item.iconname}> </NavListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    );
}

export default NavListItem;