import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import AccountBox from '@material-ui/icons/AccountBox';
import Settings from '@material-ui/icons/Settings';
import Info from '@material-ui/icons/Info';
import Help from '@material-ui/icons/Help';

const icons = new Map([
    ['Mail',        (<MailIcon/>)],
    ['MoveToInbox', (<MoveToInbox/>)],
    ['AccountBox', (<AccountBox/>)],
    ['Settings', (<Settings/>)],
    ['Info', (<Info/>)],
    ['Help', (<Help/>)],
]);

const MapIcon = props => {
    const { iconname } = props;
    return (<ListItemIcon>{icons.get(iconname)}</ListItemIcon>)
}

export default MapIcon;