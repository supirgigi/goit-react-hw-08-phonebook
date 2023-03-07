import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { useAuth } from 'shared/hooks';
import { authSignUp } from 'redux/auth/auth-operations';
import RegisterForm from 'modules/RegisterForm';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleSignUp = cred => {
    dispatch(authSignUp(cred));
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
          Register
        </Typography>
        <RegisterForm onSubmit={handleSignUp} />
      </Box>
    </Box>
  );
};

export default LoginPage;
