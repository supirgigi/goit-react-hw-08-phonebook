import { useDispatch } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

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
      <IconButton variant="outlined" onClick={logOut}>
        <LogoutIcon color="secondary" />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
