import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


const About = () => {
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
        <h1></h1>
          <Card style={{backgroundColor:'black', opacity:'0.8', color:'white', fontSize:"30px", padding:"20px"}}>
            <p>The project <strong>"Payment Gateway Integration"</strong> is in test mode only.
              The website was made for the Sparks Foundation Internship 
            </p>
            <pre style={{textAlign:"right"}}>Developer - Vinay Manala</pre>
        </Card>
      </Grid>
    </Grid>);
};

export default About;
