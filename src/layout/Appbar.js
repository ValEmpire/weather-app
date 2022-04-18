import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Appbar = () => {
  const { city, setCity } = useState("");

  const handleCityInput = (e) => {
    const city = e.target.value;
    setCity(city);
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
              <Box>
                <OutlinedInput
                  placeholder="Search city"
                  endAdornment={<SearchIcon />}
                  value={city}
                  onChange={handleCityInput}
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
