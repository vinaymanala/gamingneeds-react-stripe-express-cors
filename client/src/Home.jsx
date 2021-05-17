import "./index.css";
import React from "react";
import Donate from './Donate';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";


const Home = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "50vh" }}
    >
      <Grid item xs={7} style={{textAlign:"justify"}}>
          <Card style={{backgroundColor:'black', opacity:'0.8', color:'white', fontSize:"25px", padding:"20px"}}>
          <h2 style={{textAlign:"center"}}>Gaming For Good</h2>
            <p>Gaming is an immersive and interactive pastime, 
              with a huge audience of people of all ages and backgrounds. 
              And a growing number of charities are using online games 
              and streams to engage with prospective supporters, build online 
              communities, and drive donations.</p>
            <p>Charity Gaming is a nonprofit that provides video games to children in 
              hospitals to help make them feel like kids again.
               Donate – Help provide video games, systems, and other 
               entertainment to kids in hospitals!</p>
            <p>The GamingNeeds platform provides gaming consoles, smart devices to kids in hospitals or in orphanage homes.
              This platform works on the "Gaming for Good" motto.
            </p>
        </Card>
        <div>
            <Donate />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
