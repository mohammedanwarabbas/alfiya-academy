import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Chip, Button, useTheme, alpha } from '@mui/material';
import { ArrowForward, Lock as LockIcon, LockOpen as LockOpenIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Featured courses data - specific to this section
const featuredCourses = [
  {
    id: 1,
    title: '100 Ayaths of Spiritual Excellence',
    category: 'Ihsan',
    lockStatus: <LockOpenIcon color="success" />,
    duration: '30 hours',
    image: 'https://images.unsplash.com/photo-1761474756495-4387ad714b7d?q=80&w=368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Verses related to purifying the heart and perfecting one\'s relationship with the Creator.',
  },
  {
    id: 2,
    title: '100 Ayaths of Legal Wisdom',
    category: 'Fiqh',
    lockStatus: <LockIcon color="error" />,
    duration: '40 hours',
    image: 'https://images.unsplash.com/photo-1721378467002-8c1f2d8edec2?q=80&w=774&auto=format&fit=crop',
    description: 'Quranic verses that establish the foundations of Islamic law and daily rulings.',
  },
  {
    id: 3,
    title: '100 Ayaths of Intellectual Reflection',
    category: 'Tafakkur',
    lockStatus: <LockIcon color="error" />,
    duration: '20 hours',
    image: 'https://images.unsplash.com/photo-1528425646626-fcc5dd57daf5?q=80&w=358&auto=format&fit=crop',
    description: 'Verses that encourage looking at nature, science, and the signs of the universe.',
  },
  {
    id: 4,
    title: '100 Ayats of Akhlaq and Adab',
    category: 'Ethics',
    lockStatus: <LockIcon color="error" />,
    duration: '35 hours',
    image: 'https://images.unsplash.com/photo-1728484702798-4b2353401247?q=80&w=870&auto=format&fit=crop',
    description: 'Comprehensive study of Ethics',
  },
];

export const FeaturedCoursesSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Featured Chapters
          </Typography>
          
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto' }}
          >
            Explore our most popular Islamic studies chapters
          </Typography>
        </Box>

        {/* Courses Grid */}
        <Grid container spacing={4}>
          {featuredCourses.map((course) => (
            <Grid key={course.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                {/* Course Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Course Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Chip
                      label={course.category}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    />
                    <Typography variant="h6" color="primary.main" fontWeight={700}>
                      {course.lockStatus}
                    </Typography>
                  </Box>

                  {/* Course Title */}
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {course.title}
                  </Typography>

                  {/* Course Description */}
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>

                  {/* Course Duration */}
                  <Typography variant="body2" color="text.secondary">
                    ⏱️ {course.duration}
                  </Typography>
                </CardContent>

                {/* Course Action Button */}
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    color={course.id === 1 ? 'success' : 'error'}
                    fullWidth
                    variant="contained"
                    onClick={() => navigate('/register')}
                  >
                    {course.id === 1 ? 'Start for Free' : 'Unlock'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/courses')}
            endIcon={<ArrowForward />}
            sx={{ px: 6, borderRadius: 2 }}
          >
            View All Chapters
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedCoursesSection;