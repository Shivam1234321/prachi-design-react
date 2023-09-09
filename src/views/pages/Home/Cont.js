import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Container,Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  first:{
    boxShadow:
    "rgb(0 0 0 / 20%) 0px 20px 13px -1px, rgb(0 0 0 / 18%) 0px 9px 14px 0px, rgb(0 0 0 / 12%) 0px 1px 17px 0px",
  borderRadius: "5px",
  overflow: "hidden",
  maxWidth: "250px",
  padding:'30px',
  paddingBottom:"30px",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Container>
      <Grid container spacing={1}>
     
        <Grid item xs={12} sm={3}>
   
          <Box className={classes.first}>
            <img src ="images/Rectangle 39.png" width="100%"/>
            <Typography variant='body1'>Apple Mobile Phone </Typography>
            <Typography variant='body1'>Model NO 25</Typography>
            <Typography variant="body1">USD 299 9898 989898</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Box className={classes.first}>
            <img src ="images/Rectangle 37.png" width="100%"/>
            <Typography variant='body1'>Apple Mobile Phone </Typography>
            <Typography variant='body1'>Model NO 25</Typography>
            <Typography variant="body1">USD 299 9898 989898</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Box className={classes.first}>
            <img src ="images/Rectangle 52.png" width="100%"/>
            <Typography variant='body1'>Apple Mobile Phone </Typography>
            <Typography variant='body1'>Model NO 25</Typography>
            <Typography variant="body1">USD 299 9898 989898</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Box className={classes.first}>
            <img src ="images/Rectangle 39.png" width="100%"/>
            <Typography variant='body1'>Apple Mobile Phone </Typography>
            <Typography variant='body1'>Model NO 25</Typography>
            <Typography variant="body1">USD 299 9898 989898</Typography>
          </Box>
        </Grid>
    
      </Grid>
      </Container>
    </div>
  );
}
