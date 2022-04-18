import React from "react";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <>
      <Box height={"69px"}>
        <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Button size="large" LinkComponent={Link} to="/">
                  {"</WeatherApp>"}
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
