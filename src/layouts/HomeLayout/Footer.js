import {
  Container,
  Grid,
  makeStyles,
  ListItem,
  Typography,
  List,
  Box,
  Divider,
} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import { Link as RouterLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    paddingTop: "30px",
    backgroundColor: "#CE3126",
    "& h6": {
      fontSize: "15px",
      fontWeight: 800,
      textTransform: "uppercase",
      color: "#fff",
    },
  },

  listitem: {
    color: "#fff",
    fontWeight: 600,
    fontFamily: "'Public Sans', sans-serif",
    fontSize: "16px",
    transition: "0.5s ease-in-out",
    "&:hover": {
      transform: "translateX(10px)",
      cursor: "pointer",
    },
  },

  FooterSubPart: {
    textAlign: "left",
    padding: "16px 5px",
    border: "1px solid #e7e7e7",
    borderRadius: "5px",
    marginBottom: "30px",
    // boxShadow:"0 0 transparent",
    "& p": {
      fontStyle: "italic",
      fontWeight: 400,
      color: "#fff",
    },
  },
  FooterSubPart1: {
    textAlign: "center",
    backgroundColor:'#000',

    "& p": {
      color: "#fff",
      fontWeight: 400,
      paddingTop:'10px',
      fontSize: "14px",
    },
  },
  listbox: {
    paddingLeft: "0px !important",
  },
  last: {
    display: 'flex',
    paddingBottom:'20px',
    "& p":{
     color:'#fff',
     fontSize:"18px",
    },
  },
  last1:{
    display:'flex'
    ,color:'white'
    ,border:'1px solid #fff' , 
    width:"150px",padding:'10px',
  },
  last2:{
    display:'flex'
    ,color:'white'
    ,border:'1px solid #fff' , 
    width:"180px",padding:'10px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainSection}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6">About</Typography>
            <List className={classes.listbox}>
              <RouterLink
                className="hovertext"
                target={"_blank"}
                to="/"
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>
                  contactUs
                </ListItem>
              </RouterLink>
              <RouterLink
                className="hovertext"
                target={"_blank"}
                to="/"
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>
                  About us
                </ListItem>
              </RouterLink>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6">Helping</Typography>
            <List className={classes.listbox}>
              <RouterLink
                className="hovertext"
                to="/about"
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>About us</ListItem>
              </RouterLink>
              <RouterLink
                className="hovertext"
                to={{
                  pathname: "/contact-us",
                  state: {
                    id: "contactUs",
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>Shipping</ListItem>
              </RouterLink>

            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6">Consumer policy</Typography>
            <List className={classes.listbox}>

              <>
                <RouterLink
                  className="hovertext"
                  to={{
                    pathname: "/contact-us",
                    state: {
                      id: "contactUs",
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem className={classes.listitem}>Term & condition</ListItem>
                </RouterLink>

                <RouterLink
                  className="hovertext"
                  to={{
                    pathname: "/contact-us",
                    state: {
                      id: "contactUs",
                    },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem className={classes.listitem}>Privacy Policy</ListItem>
                </RouterLink>
              </>


            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6">Social </Typography>
            <List className={classes.listbox}>
              <RouterLink
                className="hovertext"
                to={{
                  pathname: "/term-condition",
                  state: {
                    id: "termsConditions",
                  },
                }}
                // onClick={() => window.location.reload()}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>Facebook</ListItem>
              </RouterLink>
              <RouterLink
                className="hovertext"
                to={{
                  pathname: "/commercial-terms",
                  state: {
                    id: "commercial_Terms_Of_Use",
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>
                  Twitter
                </ListItem>
              </RouterLink>
              <RouterLink
                className="hovertext"
                to={{
                  pathname: "/privacy-policy",
                  state: {
                    id: "privacyPolicy",
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>Instagram</ListItem>
              </RouterLink>
              <RouterLink
                className="hovertext"
                to={{
                  pathname: "/static-content",
                  state: {
                    id: "do_not_sell_my_info",
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                <ListItem className={classes.listitem}>
                  YouTube
                </ListItem>
              </RouterLink>
            </List>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
          <Box className={classes.last}>
          <img src="images/image 1.png" style={{ width: "100px", height: "90px" }} /> &nbsp;&nbsp;&nbsp;
         
          <Box>
          <Typography variant='body1'>Scan the QR Code to download the mobile app</Typography>
            <img src="images/image 2.png" style={{ width: "100px", height: "45px" }}/> &nbsp;&nbsp;
            <img src="images/image 2.png"style={{ width: "100px", height: "45px" }} />
            </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{display:"flex", marginTop:'10px'}}>

         
                <Box className={classes.last1}>
                <LanguageIcon />&nbsp; &nbsp;
            <Typography variant="h5">Language</Typography>&nbsp; &nbsp;
            <img src="images/Group 667.png" style={{width:'12px',height:'12px',paddingTop:'5px'}}/> 
                </Box> &nbsp;&nbsp;
                <Box className={classes.last2}>
                <LanguageIcon />&nbsp; &nbsp;
            <Typography variant="h5">United States</Typography>&nbsp; &nbsp;
            <img src="images/Group 667.png" style={{width:'12px',height:'12px',paddingTop:'5px'}}/> 
                </Box>
                </Box>
          </Grid>
       
        </Grid>   
    
      </Container>
      <Divider />
      <Box className={classes.FooterSubPart1}>
      <Container>
       
          <Grid container spacing={4}>
            <Grid item xs={6} md={4}>
              <Box style={{display:"flex",color:'#fff'}}>
              <img src="images/icons8-shopaholic-48.png"/>&nbsp;&nbsp;
              <Typography variant='body2'> Become a Sellers</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box style={{display:"flex",color:'#fff'}}>
              <img src="images/icons8-shopaholic-48.png"/>&nbsp;&nbsp;
              <Typography variant='body2'> Become a Sellers</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box style={{display:"flex",color:'#fff'}}>
              <img src="images/icons8-shopaholic-48.png"/>&nbsp;&nbsp;
              <Typography variant='body2'> Become a Sellers</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
          
        </Box>
        

    
    </Box>
  );
};

export default Footer;


