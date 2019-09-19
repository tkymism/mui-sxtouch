import React from 'react';

import MuiButton from '@material-ui/core/Button'

const Button = props => {
    const { handleClick, text } = props;
    return <MuiButton onClick={handleClick}>{text}</MuiButton>;
}

export default Button;


