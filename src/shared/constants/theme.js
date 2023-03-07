import { createTheme } from '@mui/material';

import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      main: '#212121',
      active: '#ffffff',
    },
  },
});

export default theme;
