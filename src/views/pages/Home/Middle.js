import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'#F5F5F5',
        padding:'15px',
        marginTop:"20px",
    },


    content:{
       display:'flex',
       justifyContent:'space-around',
       flexWrap:'wrap',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.content}>
                <Box style={{display:'flex'}}>
                <img src ="images/icon.png" style={{width:"25px",height:'24px'}}/>&nbsp; &nbsp;
                <Typography variant='h5'>All Caterory</Typography>
                </Box> 
                <Typography  variant='h5'>Brands</Typography>
                <Typography  variant='h5'>Vendors</Typography>
                <Typography  variant='h5'>Other</Typography>
                <Typography  variant='h5'>Other</Typography>
                <Typography  variant='h5'>Other</Typography>
            </Box>
        </div>
    );
}
