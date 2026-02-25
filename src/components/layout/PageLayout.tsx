import React, {} from 'react';
import { Box } from '@mui/material';
import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Topbar } from './Topbar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  showTopbar?: boolean;
  showFooter?: boolean;
}

export const PageLayout = ({ 
  children, 
  showTopbar = true, 
  showFooter = true
}: LayoutProps) => {
const { pathname } = useLocation();

    React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {showTopbar && <Topbar />}
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
};