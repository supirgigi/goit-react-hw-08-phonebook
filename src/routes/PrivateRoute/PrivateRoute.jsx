import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'shared/components/Loader';
import { Box } from '@mui/material';

import { selectAuthState } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuthState);

  if (!isLoggedIn && token) {
    return (
      <Box
        sx={{
          height: 'calc(100vh - 144px)',
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

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
