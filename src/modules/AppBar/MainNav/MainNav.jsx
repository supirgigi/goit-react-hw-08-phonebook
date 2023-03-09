import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
      <Link
        component={NavLink}
        to="/"
        sx={{
          color: 'text.main',
          '&.active': {
            color: 'text.active',
            cursor: 'default',
            textDecoration: 'none',
          },
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          component={NavLink}
          to="/contacts"
          sx={{
            color: 'text.main',
            '&.active': {
              color: 'text.active',
              cursor: 'default',
              textDecoration: 'none',
            },
          }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};

export default MainNav;
