import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'shared/components/Loader';
import { Box } from '@mui/material';

import { selectAuthState } from 'redux/auth/auth-selectors';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuthState);

  if (!isLoggedIn && token) {
    return (
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader />
      </Box>
    );
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
