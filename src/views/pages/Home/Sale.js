import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box ,Container} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Container>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={4}>
          <Box>
            <img src="images/Rectangle 35.png" width='100%'/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box>
            <img src="images/Rectangle 32.png" width='100%'/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Box>
            <img src="images/Rectangle 36.png" width='100%'/>
          </Box>
        </Grid>
    
      </Grid>
      </Container>
    </div>
  );
}
