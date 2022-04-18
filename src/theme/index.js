import { createTheme, responsiveFontSizes } from "@mui/material/styles";

/**
 * This will modify and create custom theme
 */
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2CBBC3",
      contrastText: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "95px",
        },
      },
    },
  },
});

/**
 * This will make sure that typography fonts will be responsive in all screen sizes
 */
export const theme = responsiveFontSizes(customTheme);
