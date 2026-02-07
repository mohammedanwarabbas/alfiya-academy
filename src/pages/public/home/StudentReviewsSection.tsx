import { useState, useEffect, useCallback, useRef, memo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Rating,
  Button,
  useTheme,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

// Memoized testimonial data to prevent re-renders
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    course: 'Fiqh of Transactions',
    rating: 5,
    text: 'The course transformed my understanding of Islamic finance. Highly recommended!',
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Fatima Ali',
    course: 'Arabic Language',
    rating: 4,
    text: 'Excellent teaching methodology. I can now read Arabic texts comfortably.',
    avatar: 'F',
  },
  {
    id: 3,
    name: 'Omar Khan',
    course: 'Aqidah',
    rating: 5,
    text: 'Clear explanations of complex theological concepts. Life-changing course.',
    avatar: 'O',
  },
  {
    id: 4,
    name: 'Sarah Mohammed',
    course: 'Akhlaq & Adab',
    rating: 4,
    text: 'Beautifully taught ethics course that applies to daily life.',
    avatar: 'S',
  },
  {
    id: 5,
    name: 'Ahmed ',
    course: 'Fiqh of Transactions',
    rating: 5,
    text: 'The course transformed my understanding of Islamic finance. Highly recommended!',
    avatar: 'A',
  },
  {
    id: 6,
    name: 'Shareef',
    course: 'Akhlaq & Adab',
    rating: 4,
    text: 'Beautifully taught ethics course that applies to daily life.',
    avatar: 'S',
  },
] as const;

// Memoized stats data
const STATS = [
  { value: '10K+', label: 'Students Enrolled' },
  { value: '50+', label: 'Expert Instructors' },
  { value: '95%', label: 'Completion Rate' },
  { value: '24/7', label: 'Support Available' },
] as const;

// Memoized Dots Component to prevent re-renders
const CarouselDots = memo(({ 
  count, 
  currentIndex, 
  onDotClick 
}: { 
  count: number; 
  currentIndex: number; 
  onDotClick: (index: number) => void;
}) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onDotClick(index)}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: currentIndex === index 
              ? theme.palette.primary.main 
              : theme.palette.grey[300],
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: currentIndex === index 
                ? theme.palette.primary.main 
                : theme.palette.grey[400],
            },
          }}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </Box>
  );
});

CarouselDots.displayName = 'CarouselDots';

// Memoized Stat Card Component
const StatCard = memo(({ value, label }: { value: string; label: string }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h2" color="primary.main" fontWeight={700}>
      {value}
    </Typography>
    <Typography variant="h6" color="text.secondary">
      {label}
    </Typography>
  </Box>
));

StatCard.displayName = 'StatCard';

export const StudentReviewsSection = () => {
  const theme = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<number | null>(null);

  // Auto-scroll interval (5 seconds)
  const AUTO_PLAY_INTERVAL = 5000;

  // Memoized navigation functions
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index);
    // Reset auto-play when user manually interacts
    setIsAutoPlaying(true);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }

      autoPlayTimerRef.current = setInterval(() => {
        nextTestimonial();
      }, AUTO_PLAY_INTERVAL);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, nextTestimonial]);

  // Pause auto-play on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, []);

  const currentTestimonialData = TESTIMONIALS[currentTestimonial];

  return (
    <Box sx={{ py: 2, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Student Reviews
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Hear from our satisfied students worldwide
          </Typography>
        </Box>

        {/* Testimonial Carousel */}
        <Box 
          sx={{ 
            position: 'relative', 
            maxWidth: '800px', 
            mx: 'auto' 
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial Card */}
         <Box
  sx={{
    p: 4,
    borderRadius: 2,
    backgroundColor: 'background.paper',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    },
  }}
>
  {/* Decorative quote icon */}
  <Box
    sx={{
      position: 'absolute',
      top: 6,
      right: 16,
      fontSize: '3rem',
      color: theme.palette.primary.light,
      opacity: 0.1,
      fontFamily: 'Georgia, serif',
    }}
  >
    "
  </Box>

  {/* Student Info */}
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, zIndex: 1 }}>
    <Avatar
      sx={{
        width: 64,
        height: 64,
        bgcolor: 'primary.main',
        fontSize: '1.5rem',
        mr: 2,
        border: `3px solid ${theme.palette.primary.light}`,
        boxShadow: theme.shadows[2],
      }}
    >
      {currentTestimonialData.avatar}
    </Avatar>
    <Box>
      <Typography variant="h6" fontWeight={700}>
        {currentTestimonialData.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Student • {currentTestimonialData.course}
      </Typography>
      <Rating
        value={currentTestimonialData.rating}
        readOnly
        size="small"
        sx={{ mt: 0.5 }}
      />
    </Box>
  </Box>

  {/* Testimonial Text */}
  <Typography 
    variant="h6" 
    sx={{ 
      fontStyle: 'italic', 
      color: 'text.primary',
      lineHeight: 1.6,
      fontWeight: 400,
      position: 'relative',
      zIndex: 1,
    }}
  >
    "{currentTestimonialData.text}"
  </Typography>
</Box>

          {/* Carousel Controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
              gap: 2,
            }}
          >
            {/* Previous Button */}
            <Button
              variant="outlined"
              onClick={prevTestimonial}
              onMouseEnter={handleMouseEnter}
              sx={{
                minWidth: 'auto',
                width: 48,
                height: 48,
                borderRadius: '50%',
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </Button>

            {/* Dots Indicator */}
            <CarouselDots 
              count={TESTIMONIALS.length}
              currentIndex={currentTestimonial}
              onDotClick={goToTestimonial}
            />

            {/* Next Button */}
            <Button
              variant="outlined"
              onClick={nextTestimonial}
              onMouseEnter={handleMouseEnter}
              sx={{
                minWidth: 'auto',
                width: 48,
                height: 48,
                borderRadius: '50%',
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </Button>
          </Box>

          {/* Auto-play Indicator */}
          {/* <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Auto-play: {isAutoPlaying ? 'ON' : 'PAUSED'} • Hover to pause
            </Typography>
          </Box> */}

        </Box>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ my: 8 }}>
          {STATS.map((stat, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <StatCard value={stat.value} label={stat.label} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentReviewsSection;