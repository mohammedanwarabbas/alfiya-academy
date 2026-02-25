import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  useTheme,
  IconButton,
} from '@mui/material';
import { Facebook, Instagram, YouTube,  } from '@mui/icons-material';
import { SOCIAL_LINKS } from '../../../utils/constants';

export default function ContactPage() {
  const theme = useTheme();
    // Map platform names to icon components
    const getSocialIcon = (platform: string) => {
      switch (platform) {
        case 'Facebook': return Facebook;
        case 'Instagram': return Instagram;
        case 'YouTube': return YouTube;
        default: return Facebook;
      }
    };

  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          py: 10,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            We would love to hear from you.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* CONTACT FORM */}
          <Grid size={{xs: 12, md: 6}}>
            <Typography variant="h3" gutterBottom>
              Send Us a Message
            </Typography>

            <Stack spacing={3} sx={{ mt: 3 }}>
              <TextField label="Full Name" fullWidth />
              <TextField label="Email Address" type="email" fullWidth />
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
              />

              <Button
                variant="contained"
                size="large"
                sx={{ alignSelf: 'flex-start', px: 5 }}
              >
                Send Message
              </Button>
            </Stack>
          </Grid>

          {/* CONTACT INFO */}
          <Grid size={{xs: 12, md: 6}}>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  📍 123 Learning Street, Education City, India
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  📞 +91 98765 43210
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  ✉️ support@alfiyaacademy.com
                </Typography>

                {/* SOCIAL LINKS */}
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
            {SOCIAL_LINKS.map((social) => {
              const Icon = getSocialIcon(social.platform);
              return (
                <IconButton
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: theme.palette.mode === 'dark' 
                      ? 'text.primary' 
                      : 'common.black',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              );
            })}
          </Box>
              </CardContent>
            </Card>

            {/* GOOGLE MAP */}
            <Box sx={{ mt: 4 }}>
              <iframe
                title="location-map"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
                src="https://maps.google.com/maps?q=India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}