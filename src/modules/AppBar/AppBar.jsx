import { AppBar, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import MainNav from './MainNav';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar sx={{ pt: 2, pb: 2 }}>
      <Grid
        component="nav"
        container
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'space-between' },
          columnGap: { xs: 2 },
          alignItems: 'center',
          pl: { xs: 1, sm: 8, md: 16 },
          pr: { xs: 1, sm: 8, md: 16 },
        }}
      >
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Grid>
    </AppBar>
  );
};
