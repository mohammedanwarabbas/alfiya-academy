import { Box, Container, IconButton, Select, MenuItem, Typography, useTheme } from '@mui/material';
import { Facebook, Instagram, YouTube, Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS, LANGUAGES } from '../../utils/constants';
import { type SelectChangeEvent } from '@mui/material';

export const Topbar = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();

const handleLanguageChange = (event: SelectChangeEvent) => {
  i18n.changeLanguage(event.target.value);
};

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
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'background.paper' 
          : 'primary.dark',
        py: 0.5,
        borderBottom: 1,
        borderColor: 'divider',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Social Media Links */}
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
                      : 'common.white',
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

          {/* Language Selector */}
          {/* temporarily hidden as function pending */}
          <Box sx={{ display: 'none', alignItems: 'center', gap: 1 }}>
            <Language 
              fontSize="small" 
              sx={{ 
                color: theme.palette.mode === 'dark' 
                  ? 'text.primary' 
                  : 'common.white' 
              }} 
            />
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                color: theme.palette.mode === 'dark' 
                  ? 'text.primary' 
                  : 'common.white',
                '& .MuiSelect-icon': {
                  color: theme.palette.mode === 'dark' 
                    ? 'text.primary' 
                    : 'common.white',
                },
                '& .MuiSelect-select': {
                  py: 0,
                  minHeight: 'auto',
                },
              }}
            >
              {LANGUAGES.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2">{lang.flag}</Typography>
                    <Typography variant="body2">{lang.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};