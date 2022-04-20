import React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { getDegree } from "../../util";
import WeatherDetaill from "../../components/WeatherDetail";
import moment from "moment-timezone";

const Homepage = (props) => {
  const {
    name,
    state,
    timeZone,
    country,
    weatherIcon,
    description,
    feelsLike,
    main,
    high,
    low,
    temperature,
    sunrise,
    sunset,
    humidity,
    visibility,
    windSpeed,
    windDegree,
    pressure,
  } = props;

  // create array with details
  // will be use to map
  const weatherDetails = [
    { name: "Humidity", value: humidity },
    { name: "Visibilitiy", value: visibility },
    { name: "Wind Speed", value: windSpeed },
    { name: "Wind Degree", value: windDegree },
    { name: "Pressure", value: pressure },
  ];

  const today = new Date().toDateString();

  const timeNow = new Date().toLocaleTimeString();

  // use moment with timeZone from store
  const sunriseStr = moment.tz(sunrise * 1000, timeZone).format("h:mma z");
  const sunsetStr = moment.tz(sunset * 1000, timeZone).format("h:mma z");

  return (
    <>
      <Box textAlign="right" mt={5} pr={3}>
        <small>{`${today} / ${timeNow}`}</small>
      </Box>
      <Paper elevation={3} component={Box} p={3} m={2}>
        <Box>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={600}
                textTransform="capitalize"
              >
                {`${name} ${state ?? ""} ${country}`}
              </Typography>
              <Typography>{main}</Typography>
              <Typography>Feels like {getDegree(feelsLike)}</Typography>
              <Typography>
                H {getDegree(high)} L {getDegree(low)}
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600} color={"primary"} variant="h3">
                {getDegree(temperature)}
              </Typography>
            </Box>
          </Box>

          <Box mt={3} mb={3}>
            <Divider />
          </Box>

          <Box textAlign={"center"}>
            <Typography variant="h6">Details</Typography>
          </Box>

          <Grid container>
            <Grid item sm={6} xs={12} order={{ sm: 1, xs: 2 }}>
              <WeatherDetaill name={"Sunrise"} value={sunriseStr} />
              <WeatherDetaill name={"Sunset"} value={sunsetStr} />

              {weatherDetails.map((detail, i) => (
                <WeatherDetaill {...detail} key={detail.value + i} />
              ))}
            </Grid>
            <Grid item sm={6} xs={12} order={{ sm: 2, xs: 1 }}>
              <Box display={"flex"} justifyContent={"center"} pb={2} mb={1}>
                <Box textAlign={"center"}>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    alt="weather description"
                  />
                  <Typography fontWeight={600} textTransform="capitalize">
                    {description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Homepage;
