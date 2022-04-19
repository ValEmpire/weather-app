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

// Redux
import { getCities, getWeatherByCoordinates, setCity } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Appbar = () => {
  // Initialize dispatch
  const dispatch = useDispatch();

  // get cities from store
  const { cities } = useSelector((state) => state.city);

  /**
   * @param {city: string} e
   */
  const handleCities = (e) => {
    const name = e.target.value;
    return dispatch(getCities(name));
  };

  /**
   *
   * @param {*} e
   * @param {*} value
   */
  const handleCity = (e, value) => {
    const { target } = e;

    // get the index of li element with id
    const selectedCityIndex = target.id.slice(target.id.length - 1);

    // well use the selectedCityIndex to array cities
    const city = cities[selectedCityIndex];

    // this will dispatch action with selectedCity
    dispatch(getWeatherByCoordinates(city));

    return dispatch(setCity(city));
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
                    <img src="/images/logo.png" alt="logo" width={"45px"} />
                    <img
                      src="/images/weather-app-string.png"
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
                  // map all cities from store
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
