import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  TextField,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import {
  FaUserCircle,
  FaShoppingCart,
  FaGlobe,
  FaRegCopy,
  FaHeart,
} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    
  },
  logoAres: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CE3126",
    height: "100%",
    borderRadius: "5px",
    
    "& h4": {
      color: "#FFFFFF",
    },
  },
  MainLayout: {
    minHeight: "calc(100vh - 415px)",
  },
  textFild: {
    position: "relative",
marginTop:'3px',
    "& button": {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      backgroundColor: "#CE3126",
      minWidth: "90px",
      fontSize: "18px",
      fontWeight: "700",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#CE3126",
      },
    },
  },
  iconsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .innerBox": {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "& .HeartIcon": {
        position: "absolute",
        bottom: "20px",
        right: "5px",
      },
      "& p": {
        marginTop: "4px",
      },
    },
  },
}));

const TopHeaderSearchIcons = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <Box>
      <Box
        style={{ width: "100%", height: "35px", backgroundColor: "#F5F5F5" }}
      ></Box>
      <Container maxWidth="lg">
        <Box style={{marginTop:'20px'}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <Box className={classes.logoAres}>
              <Typography variant="h4">Company Logo</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className={classes.textFild}>
              <TextField
                id="outlined-basic"
                fullWidth
                variant="outlined"
                placeholder="what are you looking for?"
              />
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsSearch size={30} />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className={classes.iconsBox}>
              <Box className="innerBox">
                <FaUserCircle color="#CE3126" size={30} />
                <Typography variant="body1">Profile</Typography>
              </Box>
              <Box className="innerBox">
                <FaRegCopy color="#CE3126" size={30} />
                <FaHeart className="HeartIcon" color="#f30065" />
                <Typography variant="body1">Wishlist</Typography>
              </Box>
              <Box className="innerBox">
                <FaShoppingCart color="#CE3126" size={30} />
                <Typography variant="body1">Cart</Typography>
              </Box>
              <Box className="innerBox">
                <IoNotificationsSharp color="#CE3126" size={30} />
                <Typography variant="body1">Notification</Typography>
              </Box>
              <Box className="innerBox">
                <FaGlobe color="#CE3126" size={30} />
                <Typography variant="body1">Language</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Box> 
      </Container>
    </Box>
  );
};

export default TopHeaderSearchIcons;