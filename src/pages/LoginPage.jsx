import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'shared/hooks';
import { authLogIn } from 'redux/auth/auth-operations';
import LoginForm from 'modules/LoginForm';
import { Box, Typography } from '@mui/material';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleLogIn = cred => {
    dispatch(authLogIn(cred));
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ flex: 1, pb: 10 }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <LoginForm onSubmit={handleLogIn} />
      </Box>
    </Box>
  );
};

export default LoginPage;
