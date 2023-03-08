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
        height: 'calc(100vh - 144px)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2rem' }}>
          Register
        </Typography>
        <RegisterForm onSubmit={handleSignUp} />
      </Box>
    </Box>
  );
};

export default LoginPage;
