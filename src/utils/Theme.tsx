import { createTheme, ThemeProvider } from "@mui/material";
import { DirectionResolver } from "./hooks";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1225,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: "#34C87C",
    },
    secondary: {
      main: "#00B08C",
    },
  },
  direction: localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr",

  typography: {
    fontFamily: "DINNextLTArabic-Regular",
  },
});

export default theme;
