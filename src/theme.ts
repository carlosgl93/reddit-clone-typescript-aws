import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#15616D",
    },
    secondary: {
      main: "#78290F",
    },
    error: {
      main: "#FF7D00",
    },
    background: {
      default: "#FFECD1",
    },
    text: {
      primary: "#001524",
      secondary: "#FF7D00",
    },
    warning: {
      main: "#78290F",
    },
    divider: "#BEE5BF",
    info: {
      main: "#15616D",
    },
    success: {
      main: "#FFECD1",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Source Code Pro",
  },
});

export default responsiveFontSizes(theme);
