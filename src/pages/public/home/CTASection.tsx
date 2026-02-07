import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Ready to Start Your Learning Journey?
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Join thousands of students worldwide. Start with free trial.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{
                px: 6,
                py: 1.5,
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 6,
                py: 1.5,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Talk to Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;