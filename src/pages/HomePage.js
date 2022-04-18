import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Layout from "../layout";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = (props) => {
  const today = new Date().toLocaleString();

  const sunrise = new Date(1650276717 * 1000).toLocaleTimeString();

  const sunset = new Date(1650325909 * 1000).toLocaleTimeString();

  return (
    <Layout>
      <Grid container justifyContent={"center"}>
        <Grid item md={7} xs={12}>
          <Card component={Box} p={3} m={2}>
            <Box>
              <img src="/images/weather-app.png" alt="logo" width={"100%"} />
            </Box>

            <Box pb={3} pt={2}>
              <OutlinedInput
                placeholder="Search city"
                fullWidth
                endAdornment={<SearchIcon />}
              />
            </Box>

            <Box textAlign="center">
              <Typography variant="h6" fontWeight={600}>
                {`${today}`}
              </Typography>
            </Box>

            <Box>
              <Box
                display="flex"
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Box>
                  <Typography variant="h5">Ottawa, CA</Typography>
                  <Typography>Clouds</Typography>
                  <Typography>Feels like 30&#176;</Typography>
                  <Typography>H 34&#176; L 20&#176;</Typography>
                </Box>
                <Box>
                  <Typography variant="h3"> 20&#176;</Typography>
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
                    Sunrise: <span>{sunrise}</span>
                  </Typography>
                  <Typography>
                    Sunset: <span>{sunset}</span>
                  </Typography>
                  <Typography>Humidy: 32</Typography>
                  <Typography>Visibility: 32</Typography>
                  <Typography>Wind Speed: 32</Typography>
                  <Typography>Wind Degree: 32</Typography>
                </Box>
                <Box textAlign={"center"}>
                  <img
                    src="https://openweathermap.org/img/wn/01d@2x.png"
                    alt="weather description"
                  />
                  <Typography fontWeight={600}>Clear Sky</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Homepage;
