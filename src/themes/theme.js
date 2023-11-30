import { createTheme } from "@mui/material/styles";
import {blue, grey} from '@mui/material/colors';
// import green from '@mui/material/colors/green';
let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light:grey[400],
      dark:blue[800],
      contrastText: grey[900]
    },
    secondary: {
      main: "#edf2ff",
      contrastText: grey[900],
    },
  },
});

export default theme;