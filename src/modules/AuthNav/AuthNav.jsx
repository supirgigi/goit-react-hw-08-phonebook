import { NavLink } from 'react-router-dom';
import { List, ListItem, Link } from '@mui/material';

import items from './items';

const AuthNav = () => {
  return (
    <List sx={{ display: 'flex', p: 0 }}>
      {items.map(({ id, to, text }) => (
        <ListItem key={id}>
          <Link
            component={NavLink}
            to={to}
            sx={{
              color: 'text.main',
              '&.active': {
                color: 'text.active',
              },
            }}
          >
            {text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default AuthNav;
