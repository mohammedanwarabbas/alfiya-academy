import { Box, Container, Grid, Typography, Link, Divider, useTheme, Stack } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import MediaAssets from '../../assets';

export const Footer = () => {
  const theme = useTheme();
  // const { user, isGuest, isStudent, isAdmin } = useAuth();
  ////////////////////
  const { isStudent, isAdmin } = useAuth();
  ////////////////////

  // Get role-specific data
  const getFooterData = () => {
    if (isAdmin) {
      return {
        quickLinks: [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Courses', path: '/admin/courses' },
          { label: 'Users', path: '/admin/users' },
          { label: 'Analytics', path: '/admin/analytics' },
          { label: 'Settings', path: '/admin/settings' },
        ],
        version: 'v1.0.0',
        extraText: 'Admin Panel • Secure Access Only',
      };
    }

    if (isStudent) {
      return {
        quickLinks: [
          { label: 'Dashboard', path: '/dashboard' },
          { label: 'My Courses', path: '/my-courses' },
          { label: 'Progress', path: '/progress' },
          { label: 'Certificates', path: '/certificates' },
          { label: 'Settings', path: '/settings' },
        ],
        version: 'v2.1.0',
        extraText: 'Student Portal',
      };
    }

    // Guest
    return {
      quickLinks: [
        { label: 'Home', path: '/' },
        { label: 'Courses', path: '/courses' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
      version: 'v2.1.0',
      extraText: 'Start your learning journey today',
    };
  };

  const { quickLinks, version, extraText } = getFooterData();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.paper' 
          : 'grey.50',
        borderTop: 1,
        borderColor: 'divider',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Desktop Layout - Grid for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={4}>
            {/* Logo & Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  src={theme.palette.mode === 'dark' 
                    ? MediaAssets.logoDark 
                    : MediaAssets.logoPrimary}
                  alt="Alfiya Academy"
                  sx={{ height: 40, mb: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  Master in-demand skills with expert-led courses.
                  Learn at your own pace.
                </Typography>
                {extraText && (
                  <Typography variant="caption" color="primary.main" sx={{ mt: 1, display: 'block' }}>
                    {extraText}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={0.5}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: '0.95rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Contact Us
              </Typography>
              <Stack spacing={0.8}>
                <Typography variant="body2" color="text.secondary">
                  📧 support@alfiyaacademy.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📞 +1 (555) 123-4567
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Learning Street<br />
                  Education City, EC 12345
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Mobile Layout - Stack for smaller screens */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 4 }}>
          {/* Logo & Info */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box
                component="img"
                src={theme.palette.mode === 'dark' 
                  ? MediaAssets.logoDark 
                  : MediaAssets.logoPrimary}
                alt="Alfiya Academy"
                sx={{ height: 36 }}
              />
              {extraText && (
                <Typography variant="caption" color="primary.main">
                  {extraText}
                </Typography>
              )}
            </Box>
            <Typography variant="body2" color="text.secondary">
              Master in-demand skills with expert-led courses.
              Learn at your own pace.
            </Typography>
          </Box>

          {/* Quick Links & Contact - Side by side on mobile */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
            {/* Quick Links */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={0.5}>
                {quickLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                Contact
              </Typography>
              <Stack spacing={0.8}>
                <Typography variant="caption" color="text.secondary">
                  📧 support@alfiyaacademy.com
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  📞 +1 (555) 123-4567
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 3, md: 4 } }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Alfiya Academy. All rights reserved.
          </Typography>

          {/* Version & Legal */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 3 },
          }}>
            <Typography variant="caption" color="text.secondary">
              {version}
            </Typography>
            <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 3 } }}>
              <Link
                href="/terms"
                color="text.secondary"
                underline="hover"
                variant="caption"
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                color="text.secondary"
                underline="hover"
                variant="caption"
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                Privacy
              </Link>
              {isAdmin && (
                <Typography variant="caption" color="error.main" sx={{ fontWeight: 600 }}>
                  Admin Access
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};