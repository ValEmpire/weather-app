import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      minHeight={"70vh"}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <Box textAlign={"center"}>
        <Typography variant="h4">Welcome to Weather App</Typography>
        <Typography variant="h6">Please search for your city</Typography>
      </Box>
    </Box>
  );
};

export default Home;
