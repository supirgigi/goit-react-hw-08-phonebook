import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

import { useAuth } from 'shared/hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
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

export default Navigation;
