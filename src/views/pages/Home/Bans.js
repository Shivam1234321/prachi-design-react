import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { Box, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    main: {
        padding: "30px",
        backgroundColor: "#F0cfd6",
        marginTop: '33px',
        height:'425px',
        "& p": {
        
            height: "113px",

        },
    },
    Button: {
        width: "143px",
        backgroundColor: "#C90F2E",
        height: "47px",
        color: '#fff',

    },
    img:{
    [theme.breakpoints.down('sm')]:{
         width:"100%",
    },
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <Box style={{ paddingTop: "10px" }}>
                            <Typography variant='h5'>Deal Of the Day</Typography>
                            <img src="images\Rectangle 66.png" className={classes.img}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box className={classes.main}>
                            <Typography variant='h5'>Product Description</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. Maecenas faucibus quis pulvinar arcu neque. Ornare nunc bibendum blandit nunc. Dui habitant ac in amet ac consequat pellentesque mi. Quisque lacus nam pretium t.</Typography>
                            <Typography variant='h5'>Feacture</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. Maecenas faucibus quis pulvinar arcu neque. Ornare nunc bibendum blandit nunc. Dui habitant ac in amet ac consequat pellentesque mi. Quisque lacus nam pretium t.</Typography>
                            <Box >
                                <Button className={classes.Button}>Add To Card</Button>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
