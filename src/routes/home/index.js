import React from "react";
import { Grid } from "@mui/material";
import Home from "./Home";
import Weather from "./Weather";

import { useSelector } from "react-redux";

const Homepage = (props) => {
  const { selectedCity } = useSelector((state) => state.city);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item md={7} xs={12}>
        {!selectedCity && <Home />}

        {selectedCity && <Weather />}
      </Grid>
    </Grid>
  );
};

export default Homepage;
