import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { useAuth } from 'shared/hooks';
import Phonebook from 'modules/Phonebook/Phonebook';

const ContactsPage = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to="/login" />
  ) : (
    <Box sx={{ height: '100%', pt: 15 }}>
      <Phonebook />
    </Box>
  );
};

export default ContactsPage;
