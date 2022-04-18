import React from "react";
import { Box, Card, Divider, Typography } from "@mui/material";

const Homepage = (props) => {
  const {
    name,
    country,
    sunrise,
    sunset,
    feelsLike,
    main,
    high,
    low,
    temperature,
    humidity,
    visibility,
    windSpeed,
    windDegree,
    weatherIcon,
    description,
    pressure,
  } = props;

  const today = new Date().toDateString();

  const timeNow = new Date().toLocaleTimeString();

  const sunriseStr = new Date(sunrise * 1000).toLocaleTimeString();

  const sunsetStr = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <Card component={Box} p={3} m={2}>
      <Box textAlign="center" pb={2}>
        <Typography variant="h6" fontWeight={600}>
          {`${today} / ${timeNow}`}
        </Typography>
      </Box>

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
              {`${name} ${country}`}
            </Typography>
            <Typography>{main}</Typography>
            <Typography>Feels like {feelsLike}&#176;</Typography>
            <Typography>
              {`H ${high}`}&#176; {`L ${low}`}&#176;
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={600} color={"primary"} variant="h3">
              {temperature}&#176;
            </Typography>
          </Box>
        </Box>

        <Box mt={3} mb={3}>
          <Divider />
        </Box>

        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box>
            <Typography>
              Sunrise: <span>{sunriseStr}</span>
            </Typography>
            <Typography>
              Sunset: <span>{sunsetStr}</span>
            </Typography>
            <Typography>{`Humidity ${humidity}`}</Typography>
            <Typography>{`Visibility ${visibility}`}</Typography>
            <Typography>{`Wind Speed ${windSpeed}`}</Typography>
            <Typography>{`Wind Degree ${windDegree}`}</Typography>
            <Typography>{`Pressure ${pressure}`}</Typography>
          </Box>
          <Box textAlign={"center"}>
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt="weather description"
            />
            <Typography fontWeight={600}>{description}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Homepage;
