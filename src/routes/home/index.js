import React from "react";
import { Grid } from "@mui/material";
import Home from "./Home";
import Weather from "./Weather";

// Redux
import { useSelector } from "react-redux";

const Homepage = (props) => {
  const city = useSelector((state) => state.city);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item md={7} xs={12}>
        {!city.selectedCity && <Home />}

        {city.selectedCity && <Weather {...city} />}
      </Grid>
    </Grid>
  );
};

export default Homepage;
