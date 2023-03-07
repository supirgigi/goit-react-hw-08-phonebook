import { useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';

import { useAuth } from 'shared/hooks';
import { authLogOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authLogOut());
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', height: 40 }}>
      <Typography>{user.email}</Typography>
      <Button color="secondary" variant="outlined" onClick={logOut}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
