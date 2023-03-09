import { useDispatch } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth-selectors';
import { authLogOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authLogOut());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 1, md: 4 },
        alignItems: 'center',
        height: 40,
      }}
    >
      <Typography>{user.email}</Typography>
      <IconButton variant="outlined" onClick={logOut} aria-label="logout">
        <LogoutIcon color="secondary" />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
