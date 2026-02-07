import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LimitedOfferPopup } from '../../../components/common/LimitedOfferPopup';
import { useLimitedOfferPopup } from '../../../hooks/useLimitedOffer';

export const HeroSection = () => {
  const navigate = useNavigate();
  const { showPopup, handleClose } = useLimitedOfferPopup();

  return (
    <>
      <LimitedOfferPopup open={showPopup} onClose={handleClose} />
      
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '85vh' },
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                      url('https://images.unsplash.com/photo-1629637980312-17ca9ed52f29?q=80&w=1860&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              color: 'white',
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { md: '60%' },
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Master Islamic Knowledge with{' '}
              <Box component="span" color="primary.main">
                Alfiya Academy
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 400,
              }}
            >
              Learn from expert scholars. Earn recognized certificates. 
              Transform your understanding of Islam through structured courses.
            </Typography>
            
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/courses')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                }}
                endIcon={<ArrowForward />}
              >
                Browse Courses
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                Start Free Trial
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;