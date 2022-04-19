import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Home from "./Home";
import Weather from "./Weather";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCoordinates } from "../../redux/actions";

const Homepage = (props) => {
  const weather = useSelector((state) => state.weather);

  const { selectedCity } = useSelector((state) => state.city);

  const dispatch = useDispatch();

  // this will call getWeatherByCoordinates every 10 seconds if city is not null
  useEffect(() => {
    const timeout = setInterval(() => {
      if (selectedCity.name) {
        console.log("fetching");

        dispatch(getWeatherByCoordinates(selectedCity));
      }
    }, 10000);

    return () => {
      clearInterval(timeout);
    };
  }, [selectedCity, dispatch]);

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
