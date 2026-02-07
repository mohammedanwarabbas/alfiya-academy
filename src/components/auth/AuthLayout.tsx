import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { type ReactNode } from 'react';
import MediaAssets from '../../assets';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showImage?: boolean;
}

export const AuthLayout = ({ 
  children, 
  title, 
  subtitle,
  showImage = true 
}: AuthLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Form Section */}
          <Grid size={{ xs: 12, md: showImage && !isMobile ? 6 : 12 }}>
            <Box
              sx={{
                maxWidth: 500,
                mx: 'auto',
                p: { xs: 3, sm: 4 },
                backgroundColor: 'background.paper',
                borderRadius: 3,
                boxShadow: theme.shadows[2],
              }}
            >
              {/* Logo */}
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box
                  component="img"
                  src={theme.palette.mode === 'dark' ? MediaAssets.logoDark : MediaAssets.logoPrimary}
                  alt="Alfiya Academy"
                  sx={{ height: 50, mb: 2 }}
                />
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  {title}
                </Typography>
                {subtitle && (
                  <Typography variant="body1" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}
              </Box>

              {children}
            </Box>
          </Grid>

          {/* Image Section */}
          {showImage && !isMobile && (
            <Grid size={{ md: 6 }}>
              <Box
                sx={{
                  height: '70vh',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1575645513913-c002ea3b2e01?q=80&w=1860&auto=format&fit=crop"
                  alt="Learning"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    zIndex: 2,
                    color: 'white',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  }}
                >
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Join Thousands of Learners
                  </Typography>
                  <Typography variant="body1">
                    Master Islamic knowledge with expert-led courses and earn recognized certificates.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};