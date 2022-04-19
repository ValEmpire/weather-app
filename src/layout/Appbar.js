import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getCities, getWeatherByCoordinates, setCity } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Appbar = () => {
  const dispatch = useDispatch();

  const { cities } = useSelector((state) => state.city);

  const handleCities = (e) => {
    const name = e.target.value;

    dispatch(getCities(name));
  };

  const handleCity = (e, value) => {
    const { target } = e;

    const selectedCityIndex = target.id.slice(target.id.length - 1);

    const city = cities[selectedCityIndex];

    dispatch(getWeatherByCoordinates(city));

    dispatch(setCity(city));
  };

  return (
    <>
      <Box height={"69px"}>
        <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                {/* Display All on sm to xl screen */}
                <Box display={{ xs: "none", sm: "inline" }}>
                  <Button size="large" LinkComponent={Link} to="/">
                    <img
                      src="/images/weather-app-logo.png"
                      alt="logo"
                      width={"45px"}
                    />
                    <img
                      src="/images/weather-app.png"
                      alt="logo"
                      width={"200px"}
                    />
                  </Button>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  {/* Display only logo on mobile screen */}
                  <Box display={{ xs: "inline", sm: "none" }}>
                    <Button size="large" LinkComponent={Link} to="/">
                      <img
                        src="/images/weather-app-logo.png"
                        alt="logo"
                        width={"45px"}
                      />
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box width={"250px"}>
                <Autocomplete
                  onChange={handleCity}
                  options={cities.map(
                    (option) =>
                      `${option.name} ${option.state ?? ""} ${option.country}`
                  )}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value.name
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search city"
                      onChange={handleCities}
                    />
                  )}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
