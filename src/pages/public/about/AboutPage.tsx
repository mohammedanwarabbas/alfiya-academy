import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Paper,
  useTheme,
  alpha,

} from '@mui/material';

import {AutoGraph, 
  AutoAwesome, 
  Psychology, 
  School,
MenuBook, 
  Quiz, 
  Insights, 
  EmojiEvents,
} from '@mui/icons-material';

const HERO_IMAGE =
  // 'https://images.unsplash.com/photo-1712244064014-6ed5913dda27';
  // 'https://images.unsplash.com/photo-1599081593734-5e65dd7abfba'
'https://images.unsplash.com/photo-1667968264627-f29280f8bc60'

export default function AboutPage() {
  const theme = useTheme();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 300, md: 400 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))`,
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              textAlign: 'center',
              mb: 3,
            }}
          >
            About Alfiya Academy
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'white',
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              opacity: 0.9,
            }}
          >
            Empowering students with structured, meaningful and practical
            learning experiences built for real growth.
          </Typography>
        </Container>
      </Box>

      {/* ================= MISSION & VISION ================= */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Mission */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.background.paper})`,
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ color: 'primary.main' }}
                >
                  Our Mission
                </Typography>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  To make high-quality learning accessible, structured, and
                  practical for every student.
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="body2">
                    • Clear step-by-step learning paths
                  </Typography>
                  <Typography variant="body2">
                    • Practical lessons with real understanding
                  </Typography>
                  <Typography variant="body2">
                    • Continuous progress tracking
                  </Typography>
                </Stack>
              </Paper>
            </Grid>

            {/* Vision */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.background.paper})`,
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ color: 'primary.main' }}
                >
                  Our Vision
                </Typography>

                <Typography variant="body1" sx={{ mb: 3 }}>
                  To become a trusted global learning platform that transforms
                  knowledge into real-world capability.
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="body2">
                    • Build confident learners
                  </Typography>
                  <Typography variant="body2">
                    • Encourage consistent growth
                  </Typography>
                  <Typography variant="body2">
                    • Create impact beyond classrooms
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= WHAT WE OFFER ================= */}
<Box
  sx={{
    py: { xs: 8, md: 12 },
    backgroundColor: 'background.default', // Using default to contrast against the paper cards
  }}
>
  <Container maxWidth="lg">
    <Typography
      variant="h2"
      textAlign="center"
      gutterBottom
      sx={{ mb: 8, fontWeight: 700 }}
    >
      What We Offer
    </Typography>

    <Grid container spacing={4}>
      {[
        {
          title: 'Structured Chapters',
          desc: 'Organized lessons that build knowledge progressively.',
          icon: <MenuBook />,
          color: 'primary.main',
        },
        {
          title: 'Interactive Quizzes',
          desc: 'Assess understanding and reinforce learning effectively.',
          icon: <Quiz />,
          color: 'secondary.main',
        },
        {
          title: 'Progress Tracking',
          desc: 'Monitor learning journey with real-time insights.',
          icon: <Insights />,
          color: 'success.main',
        },
        {
          title: 'Completion Certificates',
          desc: 'Recognize achievements with verified certificates.',
          icon: <EmojiEvents />,
          color: 'warning.main',
        },
      ].map((item) => (
        <Grid size={{ xs: 12, md: 6 }} key={item.title}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              height: '100%',
              bgcolor: 'background.paper',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'flex-start', // Keeps icon at the top if text is long
              gap: 3,
              '&:hover': {
                borderColor: item.color,
                boxShadow: (theme) => `0 10px 30px ${alpha(theme.palette.common.black, 0.05)}`,
                transform: 'translateX(8px)', // Subtle horizontal slide
              },
            }}
          >
            {/* Left Side: Icon Container */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 60,
                height: 60,
                borderRadius: 3,
              borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                color: item.color,
              }}
            >
              {item.icon}
            </Box>

            {/* Right Side: Content */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {item.desc}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      {/* ================= WHY CHOOSE US ================= */}
<Box
  sx={{
    py: { xs: 10, md: 15 },
    // Using your primary gradient
    background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Decorative Glow */}
  <Box 
    sx={{ 
      position: 'absolute', 
      bottom: -50, 
      left: -50, 
      width: 250, 
      height: 250, 
      borderRadius: '50%', 
      background: (theme) => alpha(theme.palette.secondary.main, 0.2),
      filter: 'blur(60px)'
    }} 
  />

  <Container maxWidth="lg">
    <Typography
      variant="h2"
      textAlign="center"
      sx={{ color: 'common.white', mb: 2, fontWeight: 700 }}
    >
      Why Choose Us
    </Typography>
    
    <Typography
      variant="body1"
      textAlign="center"
      sx={{ color: alpha('#fff', 0.8), mb: 8, maxWidth: 600, mx: 'auto' }}
    >
      Everything we do at Alfiya Academy is designed to make your learning 
      journey as smooth and effective as possible.
    </Typography>

    <Grid container spacing={4}>
      {[
        {
          title: 'Modern Structure',
          desc: 'Adaptive learning paths designed for current industry standards.',
          icon: <School fontSize="large" />,
        },
        {
          title: 'Distraction Free',
          desc: 'Clean UI focused entirely on your progress and content.',
          icon: <AutoAwesome fontSize="large" />,
        },
        {
          title: 'Consistent Growth',
          desc: 'Trackable milestones to ensure you never stop moving forward.',
          icon: <AutoGraph fontSize="large" />,
        },
        {
          title: 'Student Focused',
          desc: 'Built based on real student feedback and everyday needs.',
          icon: <Psychology fontSize="large" />,
        },
      ].map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Box
            sx={{
              p: 4,
              height: '100%',
              borderRadius: 4,
              textAlign: 'center',
              // Dynamic background that works for both modes on top of the purple gradient
              bgcolor: (theme) => theme.palette.mode === 'dark' 
                ? alpha(theme.palette.background.paper, 0.1) 
                : alpha('#fff', 0.1),
              backdropFilter: 'blur(12px)',
              border: '1px solid',
              borderColor: () => alpha('#fff', 0.2),
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                bgcolor: () => alpha('#fff', 0.2),
                borderColor: (theme) => theme.palette.secondary.light,
              },
            }}
          >
            <Stack alignItems="center" spacing={2}>
              <Box 
                sx={{ 
                  display: 'flex',
                  p: 1.5,
                  borderRadius: '50%',
                  bgcolor: 'common.white',
                  color: 'primary.main',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), lineHeight: 1.7 }}>
                {item.desc}
              </Typography>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
    </>
  );
}