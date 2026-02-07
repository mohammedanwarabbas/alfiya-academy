import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  useTheme,
  alpha,
  Fade,
  Paper,
  Stack,
  Badge,
} from '@mui/material';
import {
  Close,
  ArrowForward,
  LocalOffer,
  Timer,
  Star,
  CheckCircle,
  CardGiftcard as Gift,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LimitedOfferPopupProps {
  open: boolean;
  onClose: () => void;
}

export const LimitedOfferPopup = ({ open, onClose }: LimitedOfferPopupProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isClosing, setIsClosing] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!open) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (open) {
      // document.body.style.overflow = 'hidden';
      // Scroll to top to prevent scroll position issue
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleRegister = () => {
    handleClose();
    navigate('/register', { state: { fromPopup: true } });
  };

  const handleExplore = () => {
    handleClose();
    navigate('/courses', { state: { fromPopup: true } });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
        },
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        outline: 'none', // Remove focus outline
        '&:focus': {
          outline: 'none',
        },
      }}
      disableAutoFocus // Prevent auto-focus on Modal
      disableEnforceFocus // Allow clicking outside
      disableRestoreFocus // Don't restore focus after close
    >
      <Fade in={open && !isClosing} timeout={300}>
        <Paper
          elevation={24}
          sx={{
            position: 'relative',
            maxWidth: 500,
            width: '100%',
            overflow: 'hidden',
            borderRadius: 3,
            border: `3px solid ${theme.palette.primary.main}`,
            outline: 'none', // Remove focus outline
            '&:focus': {
              outline: 'none',
              boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.3)}`,
            },
          }}
        >
          {/* Background Image with Overlay */}
          <Box
            sx={{
              position: 'relative',
              height: 200,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1669608161577-4809d6245c90?q=80&w=1200&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              p: 3,
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'rotate(90deg)',
                  transition: 'transform 0.3s',
                },
              }}
            >
              <Close />
            </IconButton>

            {/* Ribbon Badge */}
            <Badge
              badgeContent="HOT"
              color="error"
              sx={{
                position: 'absolute',
                top: -10,
                right: 30,
                '& .MuiBadge-badge': {
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 2,
                  transform: 'rotate(45deg)',
                },
              }}
            />

            {/* Timer */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mt:1,
                mb: 2,
                p: 1.5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Timer sx={{ color: '#FFD700' }} />
              <Typography variant="body2" sx={{ color: 'white' }}>
                Limited Time:{' '}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{
                  color: '#FFD700',
                  textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                  animation: timeLeft < 60 ? 'pulse 1s infinite' : 'none',
                  '@keyframes pulse': {
                    '0%, 100%': { 
                      color: '#FFD700',
                      transform: 'scale(1)',
                    },
                    '50%': { 
                      color: '#FF4500',
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                {formatTime(timeLeft)}
              </Typography>
            </Box>

            <Typography
              variant="h3"
              fontWeight={800}
              align="center"
              sx={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                background: 'linear-gradient(45deg, #FFD700 30%, #FF8E53 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              🎁 EXCLUSIVE OFFER!
            </Typography>
            
            <Typography variant="h6" align="center" sx={{ opacity: 0.9 }}>
              Special Launch Discount • Limited Spots
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ p: 4, backgroundColor: 'background.paper' }}>
            {/* Benefits */}
            <Stack spacing={2} sx={{ mb: 4 }}>
              {[
                { icon: <Gift />, text: 'Early Bird Discount', highlight: 'Save 20%' },
                { icon: <Star />, text: 'Priority Access', highlight: 'Jump the Queue' },
                { icon: <CheckCircle />, text: 'Bonus Materials', highlight: 'Free Resources' },
                { icon: <LocalOffer />, text: 'Limited Time', highlight: 'Today Only' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" fontWeight={600}>
                      {item.text}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    color="primary.main"
                    sx={{
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {item.highlight}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* CTA Buttons */}
            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleRegister}
                endIcon={<ArrowForward />}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.6)}`,
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                🚀 CLAIM MY SPOT NOW
              </Button>

              <Button
                variant="outlined"
                fullWidth
                size="large"
                onClick={handleExplore}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  borderWidth: 2,
                  color: 'text.primary',
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                👀 EXPLORE COURSES FIRST
              </Button>
            </Stack>

            {/* Footer */}
            <Typography
              variant="caption"
              color="text.secondary"
              align="center"
              sx={{
                display: 'block',
                mt: 3,
                opacity: 0.7,
              }}
            >
              🔒 Secure registration • 💯 Money-back guarantee • ⭐ 4.8/5 rating
            </Typography>
          </Box>

          {/* Decorative Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: -20,
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette.secondary.main, 0.2),
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              right: -30,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              zIndex: 1,
            }}
          />
        </Paper>
      </Fade>
    </Modal>
  );
};