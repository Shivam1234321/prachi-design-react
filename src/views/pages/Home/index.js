import React from "react";
import { Box, Card } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner"
import Sellers from "./Sellers";
import Collection from "./Collection";
import Auction from "./Auction";
import Middle from "./Middle";
import Sale from "./Sale";
import Cont from "./Cont";
import Bans from "./Bans";
function Home(props) {
  return (
    <Page title="Website">
      <Box>
        <Middle />
        <Banner /> 
        <Sale />
        <Cont />
        <Bans />
        <Cont />
        <Cont/>
        {/* <Sellers /> */}
        {/* <Collection />
        <Auction /> */}
      </Box>
    </Page>
  );
}

export default Home;
