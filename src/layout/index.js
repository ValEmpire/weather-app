import React from "react";
import { Box, Container, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Appbar from "./Appbar";

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box minHeight={"100vh"}>
        <Appbar />

        <Container maxWidth="lg">
          <Box>{props.children}</Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
