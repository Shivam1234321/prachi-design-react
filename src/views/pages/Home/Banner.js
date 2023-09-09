import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton,
  FormHelperText,
  Link,
  Grid,
} from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  MainBox: {
   // background: 'url("images/png1.png")',
    backgroundRepeat: "no-repeat",
    paddingTop:'30px',
    position: "relative",
    backgroundCover:'no-cover',
    backgroundColor: "#CE3126",
    backgroundPosition: "center",
    "& h3": {
      fontSize: "25px",
      lineHeight: "1.2",
      marginBottom: "15px",
      color: "#fff",
      paddingTop:'20px',
      //   maxWidth: "450px",
    },
  },
  BookDemo: {
    width:'100px',
    height:'40px',
    color:'#CE3126',
    backgroundColor:'#fff',
    borderRadius:'30px',

    "&:hover": {
      backgroundColor: "#2b7c6b",
    },
  },
  EveryThingImg: {
    "& img": {
      backgroundPosition: "right",
    },
  },
}));
const Everything = () => {
  const classes = useStyles();
  return (
    <Box className={classes.MainBox}>
      <Container maxWidth={false} style={{ maxWidth: "1140px" }}>
        <Grid container>
          <Grid item lg={7} md={7} sm={12} xs={12} >
            <Box className={classes.contentBox} order='1'>
              <Typography variant="h3">
                Everything you need to grow a canna business online
              </Typography>
              <Typography variant ='h3' style={{ fontSize: "16px" }}>
                Eleven million cannabis journeys begin on Kanabix each month.
                Shoppers come to us 24/7 with a strong intent to purchase.
                Whether you’re a store, brand, doctor, or lab, Kanabix is the
                acquisition tool that grows your business.
              </Typography>
              <RouterLink to="getstarted" style={{ textDecoration: "none" }}>
                <Button className={classes.BookDemo}>Buy Now</Button>
              </RouterLink>
            </Box>
          </Grid>
         <Grid item lg={5} md={5} sm={12} xs={12}>
< Box >
<img src="images/png1.png"/>
</Box>

        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Everything;
