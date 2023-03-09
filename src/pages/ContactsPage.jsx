import { Box } from '@mui/material';

import Phonebook from 'modules/Phonebook/Phonebook';

const ContactsPage = () => {
  return (
    <Box sx={{ height: '100%', pt: 5 }}>
      <Phonebook />
    </Box>
  );
};

export default ContactsPage;
