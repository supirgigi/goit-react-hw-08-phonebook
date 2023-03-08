import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 144px)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h4">Oops! Something went wrong.</Typography>
      <Button
        component={Link}
        variant="text"
        to="/"
        endIcon={<ArrowForwardIcon />}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
