import { Box, Typography, Button, Container } from '@mui/material';
import { Home, SearchOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }}>
          <SearchOff sx={{ fontSize: 100, color: 'error.main', mb: 4, opacity: 0.8 }} />
          <Typography variant="h1" fontWeight={700} gutterBottom>
            {/* 404 */}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {/* Page Not Found */}
            Website under developement
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Home />}
            onClick={() => navigate('/')}
            sx={{ px: 4, py: 1.5 }}
          >
            Go to Homepage
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;