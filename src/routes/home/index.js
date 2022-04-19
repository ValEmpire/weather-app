import React from "react";
import { Grid } from "@mui/material";
import Home from "./Home";
import Weather from "./Weather";

// Redux
import { useSelector } from "react-redux";

const Homepage = (props) => {
  const weather = useSelector((state) => state.weather);

  const { selectedCity } = useSelector((state) => state.city);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item md={7} xs={12}>
        {!selectedCity.name && <Home />}

        {selectedCity.name && <Weather {...weather} {...selectedCity} />}
      </Grid>
    </Grid>
  );
};

export default Homepage;
