import { Box, Container, Typography, Grid, useTheme, alpha } from '@mui/material';
import {
  PlayCircle,
  School,
  Verified,
  AccessTime,
} from '@mui/icons-material';

// Features data - specific to WhyChooseUs section
const features = [
  {
    icon: <PlayCircle fontSize="large" />,
    title: 'Interactive Learning',
    description: 'Engaging video lessons with quizzes and practical exercises',
  },
  {
    icon: <School fontSize="large" />,
    title: 'Expert Instructors',
    description: 'Learn from qualified scholars and industry professionals',
  },
  {
    icon: <Verified fontSize="large" />,
    title: 'Certification',
    description: 'Earn recognized certificates upon course completion',
  },
  {
    icon: <AccessTime fontSize="large" />,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace with lifetime access to materials',
  },
];

export const WhyChooseUsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Why Choose Alfiya Academy?
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            We combine traditional Islamic knowledge with modern learning methods
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                {/* Feature Icon */}
                <Box
                  sx={{
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: 'primary.main',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Feature Title */}
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {feature.title}
                </Typography>

                {/* Feature Description */}
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Academy Info Box */}
        <Box
          sx={{
            mt: 10,
            p: 4,
            borderRadius: 2,
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Typography variant="h4" fontWeight={600} gutterBottom align="center">
            About Alfiya Academy
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            align="center" 
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Alfiya Academy is a premier online Islamic education platform dedicated to providing authentic, 
            structured learning experiences. Our courses are designed by qualified scholars and educators 
            who combine traditional Islamic knowledge with contemporary teaching methodologies. We serve 
            students worldwide, helping them deepen their understanding of Islam in a flexible, accessible format.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;