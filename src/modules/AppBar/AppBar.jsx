import { AppBar, Grid } from '@mui/material';

import { useAuth } from 'shared/hooks';
import UserMenu from 'modules/UserMenu';
import AuthNav from 'modules/AuthNav';
import Navigation from 'modules/Navigation';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar sx={{ pt: 2, pb: 2 }}>
      <Grid
        component="nav"
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: { xs: 4, sm: 8, md: 16 },
          pr: { xs: 4, sm: 8, md: 16 },
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Grid>
    </AppBar>
  );
};
