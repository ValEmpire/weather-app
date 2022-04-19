import React, { useCallback, useEffect } from "react";
import { Grid } from "@mui/material";
import Home from "./Home";
import Weather from "./Weather";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCoordinates } from "../../redux/actions";

const Homepage = (props) => {
  const weather = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const { selectedCity } = useSelector((state) => state.city);

  const handleWeather = useCallback(() => {
    setInterval(() => dispatch(getWeatherByCoordinates(selectedCity)), 10000);
  }, [dispatch, selectedCity]);

  useEffect(() => {
    handleWeather();
  }, [handleWeather]);

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
