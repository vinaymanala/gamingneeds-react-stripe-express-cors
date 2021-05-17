import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Home from "./Home";
import About from "./About";

const useStyles = makeStyles({
  appbar: {
    // background: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
    align: "center",
    display: "inline"
  }
});
export default function App() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }
  return (
    <div className="App">
      <h2 style={{ display: "flex", color: "white", margin: "1px" }}>
        GamingNeeds
      </h2>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          position="static"
        >
          <Tab
            label={
              <Link className="link" to="/">
                <h4 style={{fontSize:"16px"}}>Home</h4>
              </Link>
            }
          />
          <Tab
            label={
              <Link className="link" to="/about">
                <h4 style={{fontSize:"16px"}}>About</h4>
              </Link>
            }
          />
        </Tabs>
      </AppBar>
      <TabPanel value={selectedTab} index={0}>
        <Typography>
          <Home />
        </Typography>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Typography>
          <About />
        </Typography>
      </TabPanel>
    </div>
  );
}
