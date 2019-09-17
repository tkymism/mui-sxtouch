import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

const data_array = [
    {
        title: 'This is the 1st sheet of paper.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor ' +
            'purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi ' +
            'tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non ' + 
            'tellus. Convallis convallis tellus id interdum velit laoreet id donec ' +
            'ultrices. Odio morbi quis commodo odio aenean sed adipiscing. ' +
            'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.' +
            'Cursus euismod quis viverra nibh cras. '+
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. '+
            'Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis' +
            'feugiat vivamus at augue. At augue eget arcu dictum varius duis at ' +
            'consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem' +
            'donec massa sapien faucibus et molestie ac.'
    },
    {
        title: 'This is the 2nd sheet of paper.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor ' +
            'purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi ' +
            'tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non ' + 
            'tellus. Convallis convallis tellus id interdum velit laoreet id donec ' +
            'ultrices. Odio morbi quis commodo odio aenean sed adipiscing. ' +
            'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.' +
            'Cursus euismod quis viverra nibh cras. '+
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. '+
            'Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis' +
            'feugiat vivamus at augue. At augue eget arcu dictum varius duis at ' +
            'consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem' +
            'donec massa sapien faucibus et molestie ac.'
    },
    {
        title: 'This is the 3rd sheet of paper.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor ' +
            'purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi ' +
            'tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non ' + 
            'tellus. Convallis convallis tellus id interdum velit laoreet id donec ' +
            'ultrices. Odio morbi quis commodo odio aenean sed adipiscing. ' +
            'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.' +
            'Cursus euismod quis viverra nibh cras. '+
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. '+
            'Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis' +
            'feugiat vivamus at augue. At augue eget arcu dictum varius duis at ' +
            'consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem' +
            'donec massa sapien faucibus et molestie ac.'
    },
    {
        title: 'This is the 3rd sheet of paper.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor ' +
            'purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi ' +
            'tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non ' + 
            'tellus. Convallis convallis tellus id interdum velit laoreet id donec ' +
            'ultrices. Odio morbi quis commodo odio aenean sed adipiscing. ' +
            'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.' +
            'Cursus euismod quis viverra nibh cras. '+
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. '+
            'Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis' +
            'feugiat vivamus at augue. At augue eget arcu dictum varius duis at ' +
            'consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem' +
            'donec massa sapien faucibus et molestie ac.'
    },
    {
        title: 'This is the 3rd sheet of paper.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor ' +
            'purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi ' +
            'tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non ' + 
            'tellus. Convallis convallis tellus id interdum velit laoreet id donec ' +
            'ultrices. Odio morbi quis commodo odio aenean sed adipiscing. ' +
            'Amet nisl suscipit adipiscing bibendum est ultricies integer quis.' +
            'Cursus euismod quis viverra nibh cras. '+
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. '+
            'Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis' +
            'feugiat vivamus at augue. At augue eget arcu dictum varius duis at ' +
            'consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem' +
            'donec massa sapien faucibus et molestie ac.'
    },
]

const BgContainer = props => {
    const { children, bgColor } = props;
    const styles = {
        padding:    10,
        background: bgColor,
    };
    return <div style={styles}>{children}</div>
}

const TypographyPaper = props => {
    const { title, text } = props;
    const styles = {
        padding:    10,
    };
    return (
        <Paper style={styles}>
            <Typography variant="h5" component="h3">{title}</Typography>
            <Typography paragraph>{text}</Typography>
        </Paper>
    );
}

const TypographyContainer = props => {
    const { data_arr } = props;
    return (
        data_arr.map( (data, i) => {
            return (
                <div>
                    <div style={{
                        padding:    5
                    }} />
                    <TypographyPaper title={data.title} text={data.text} />
                </div>
                );
            }));
}

const MainContainer = () => {
    return (
        <SwipeableViews>
            <BgContainer bgColor='#FEA900'><TypographyContainer data_arr={data_array}/></BgContainer>
            <BgContainer bgColor='#B3DC4A'><TypographyContainer data_arr={data_array}/></BgContainer>
            <BgContainer bgColor='#6AC0FF'><TypographyContainer data_arr={data_array}/></BgContainer>
        </SwipeableViews>
    );
};

export default MainContainer;