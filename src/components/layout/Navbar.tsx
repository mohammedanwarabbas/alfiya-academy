import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  School,
  AttachMoney,
  Info,
  ContactMail,
  Dashboard,
  Book,
  Explore,
  TrendingUp,
  CardMembership,
  People,
  Analytics,
  VideoLibrary,
  Person,
  Settings,
  Key,
  ExitToApp,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
// import { useAuth } from '../../hooks/useAuth';
import { useThemeMode } from '../../theme/useThemeMode';
import MediaAssets from '../../assets';
import { NAVIGATION_CONFIG, ROLES } from '../../utils/constants';

export const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme, mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const { user, logout, isGuest, isAdmin } = useAuth();
const { user, logout, isGuest, isAdmin } = {
  user: { firstName: "Alfiya", lastName:"banu",email:"abc@gc" },
  logout: () => {},
  isGuest: true,
  isAdmin: false
};
  // const { isStudent } = useAuth();
  
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);

  // Determine user role
  const userRole = isGuest ? ROLES.GUEST : 
                   isAdmin ? ROLES.ADMIN : 
                   ROLES.STUDENT;

  const navigationItems = NAVIGATION_CONFIG[userRole];

  const handleLogoClick = () => {
    if (isGuest) {
      navigate('/');
    } else if (isAdmin) {
      navigate('/admin/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const handleLogout = async () => {
    handleUserMenuClose();
    await logout();
    navigate('/');
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ComponentType> = {
      Home, School, AttachMoney, Info, ContactMail,
      Dashboard, Book, Explore, TrendingUp, CardMembership,
      People, Analytics, VideoLibrary,
    };
    return iconMap[iconName] || Home;
  };

  const isActive = (path: string) => {
    return location.pathname === path || 
           location.pathname.startsWith(path + '/');
  };

  const renderNavigationItems = () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {navigationItems.map((item) => {
        const Icon = getIcon(item.icon);
        return (
          <Button
            key={item.path}
            startIcon={<Icon />}
            onClick={() => navigate(item.path)}
            sx={{
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              backgroundColor: isActive(item.path) 
                ? alpha(theme.palette.primary.main, 0.1)
                : 'transparent',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.15),
              },
              borderRadius: 2,
              px: 2,
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1, gap: 2 }}>
          {/* Logo */}
          <Box
            component="img"
            src={mode === 'dark' ? MediaAssets.logoDark : MediaAssets.logoPrimary}
            alt="Alfiya Academy"
            onClick={handleLogoClick}
            sx={{
              height: 40,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ flexGrow: 1 }}>
                {renderNavigationItems()}
              </Box>

              {/* Theme Toggle */}
              <IconButton onClick={toggleTheme} color="primary" sx={{ display: 'none' }}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              {/* Auth Section */}
              {isGuest ? (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/login')}
                    sx={{ borderRadius: 2 }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/register')}
                    sx={{ borderRadius: 2 }}
                  >
                    Sign Up
                  </Button>
                </Box>
              ) : (
                <>
                  <IconButton onClick={handleUserMenuOpen} size="small">
                    <Avatar
                      
                      alt={`${user?.firstName} ${user?.lastName}`}
                      sx={{ width: 40, height: 40 }}
                    >
                      {user?.firstName?.charAt(0)}
                    </Avatar>
                  </IconButton>
                  <Menu
                    anchorEl={userMenuAnchor}
                    open={Boolean(userMenuAnchor)}
                    onClose={handleUserMenuClose}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <Box sx={{ px: 2, py: 1.5, minWidth: 200 }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {user?.firstName} {user?.lastName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user?.email}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="primary.main" 
                        sx={{ fontWeight: 600 }}
                      >
                        {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                      </Typography>
                    </Box>
                    <Divider />
                    <MenuItem onClick={() => navigate('/profile')}>
                      <ListItemIcon><Person fontSize="small" /></ListItemIcon>
                      Edit Profile
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/change-password')}>
                      <ListItemIcon><Key fontSize="small" /></ListItemIcon>
                      Change Password
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/settings')}>
                      <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                      Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon><ExitToApp fontSize="small" /></ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton onClick={handleMobileMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleMobileMenuClose}
                sx={{ '& .MuiPaper-root': { width: 280 } }}
              >
                {navigationItems.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <MenuItem 
                      key={item.path} 
                      onClick={() => {
                        navigate(item.path);
                        handleMobileMenuClose();
                      }}
                      selected={isActive(item.path)}
                    >
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      {item.label}
                    </MenuItem>
                  );
                })}
                <Divider />
                <MenuItem onClick={toggleTheme} sx={{ display: 'none' }}>
                  <ListItemIcon>
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </ListItemIcon>
                  {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </MenuItem>
                {isGuest ? (
                  <>
                    <MenuItem onClick={() => {
                      navigate('/login');
                      handleMobileMenuClose();
                    }}>
                      <ListItemIcon><Person /></ListItemIcon>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => {
                      navigate('/register');
                      handleMobileMenuClose();
                    }}>
                      <ListItemIcon><Settings /></ListItemIcon>
                      Sign Up
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => {
                      navigate('/profile');
                      handleMobileMenuClose();
                    }}>
                      <ListItemIcon><Person /></ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon><ExitToApp /></ListItemIcon>
                      Logout
                    </MenuItem>
                  </>
                )}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};