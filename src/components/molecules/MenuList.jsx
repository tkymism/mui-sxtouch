import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import MapIcon from './MapIcon'

const MenuListItem = props => {
    const href = props.item.href;
    return href ? <MenuListItemLink {...props}/> : <MenuListItemBase {...props}/> ;
}

const MenuListItemLink = props => {
    const href = props.item.href;
    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <MenuListItemBase {...props} />
        </Link>
    );
}

const MenuListItemBase = props => {
    const { index, item } = props;
    return (
        <ListItem button key={index}>
            <MapIcon iconname={item.iconname}> </MapIcon>
            <ListItemText primary={item.title} />
        </ListItem>
    );
}

const MenuListGroup = props => {
    const { group } = props;
    return (
        <div>
            <Divider/>
            <List>
                { group.map( (item, i) => <MenuListItem key={i} item={item}/> )}
            </List>
        </div>
    );
}

const MenuList = props => {
    const { navigations } = props;
    return navigations.map( (group, i) => <MenuListGroup key={i} group={group}/>);
};

export default MenuList;