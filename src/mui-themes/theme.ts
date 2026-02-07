import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    
    // Mobile-first responsive typography
    h1: { 
      fontFamily: "'Poppins', 'Inter', sans-serif", 
      fontWeight: 700, 
      fontSize: '2rem', // Mobile (xs)
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': { fontSize: '2.5rem' }, // Tablet (sm)
      '@media (min-width:900px)': { fontSize: '2.75rem' }, // Desktop (md)
      '@media (min-width:1200px)': { fontSize: '3rem' }, // Large (lg)
      '@media (min-width:1536px)': { fontSize: '3.25rem' }, // XLarge (xl)
    },
    
    h2: { 
      fontFamily: "'Poppins', 'Inter', sans-serif", 
      fontWeight: 600, 
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:600px)': { fontSize: '2rem' },
      '@media (min-width:900px)': { fontSize: '2.125rem' },
      '@media (min-width:1200px)': { fontSize: '2.25rem' },
      '@media (min-width:1536px)': { fontSize: '2.5rem' },
    },
    
    h3: {
      fontFamily: "'Poppins', 'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      '@media (min-width:600px)': { fontSize: '1.625rem' },
      '@media (min-width:900px)': { fontSize: '1.75rem' },
      '@media (min-width:1200px)': { fontSize: '1.875rem' },
      '@media (min-width:1536px)': { fontSize: '2rem' },
    },
    
    h4: {
      fontFamily: "'Poppins', 'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      '@media (min-width:600px)': { fontSize: '1.375rem' },
      '@media (min-width:900px)': { fontSize: '1.5rem' },
      '@media (min-width:1200px)': { fontSize: '1.625rem' },
      '@media (min-width:1536px)': { fontSize: '1.75rem' },
    },
    
    h5: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
      '@media (min-width:600px)': { fontSize: '1.1875rem' },
      '@media (min-width:900px)': { fontSize: '1.25rem' },
      '@media (min-width:1200px)': { fontSize: '1.3125rem' },
      '@media (min-width:1536px)': { fontSize: '1.375rem' },
    },
    
    h6: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      '@media (min-width:600px)': { fontSize: '1.0625rem' },
      '@media (min-width:900px)': { fontSize: '1.125rem' },
      '@media (min-width:1200px)': { fontSize: '1.1875rem' },
      '@media (min-width:1536px)': { fontSize: '1.25rem' },
    },
    
    body1: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
      '@media (min-width:600px)': { fontSize: '0.9375rem' },
      '@media (min-width:900px)': { fontSize: '1rem' },
      '@media (min-width:1200px)': { fontSize: '1.0625rem' },
      '@media (min-width:1536px)': { fontSize: '1.125rem' },
    },
    
    body2: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.75rem',
      lineHeight: 1.5,
      fontWeight: 400,
      '@media (min-width:600px)': { fontSize: '0.8125rem' },
      '@media (min-width:900px)': { fontSize: '0.875rem' },
      '@media (min-width:1200px)': { fontSize: '0.9375rem' },
      '@media (min-width:1536px)': { fontSize: '1rem' },
    },
    
    subtitle1: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 500,
      '@media (min-width:600px)': { fontSize: '0.9375rem' },
      '@media (min-width:900px)': { fontSize: '1rem' },
      '@media (min-width:1200px)': { fontSize: '1rem' },
      '@media (min-width:1536px)': { fontSize: '1.0625rem' },
    },
    
    subtitle2: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.75rem',
      lineHeight: 1.4,
      fontWeight: 500,
      '@media (min-width:600px)': { fontSize: '0.8125rem' },
      '@media (min-width:900px)': { fontSize: '0.875rem' },
      '@media (min-width:1200px)': { fontSize: '0.875rem' },
      '@media (min-width:1536px)': { fontSize: '0.9375rem' },
    },
    
    caption: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.6875rem',
      lineHeight: 1.4,
      fontWeight: 400,
      '@media (min-width:600px)': { fontSize: '0.75rem' },
      '@media (min-width:900px)': { fontSize: '0.8125rem' },
      '@media (min-width:1200px)': { fontSize: '0.8125rem' },
      '@media (min-width:1536px)': { fontSize: '0.875rem' },
    },
    
    button: { 
      fontFamily: "'Inter', system-ui, sans-serif",
      textTransform: 'none', 
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      '@media (min-width:600px)': { fontSize: '0.9375rem' },
      '@media (min-width:900px)': { fontSize: '1rem' },
      '@media (min-width:1200px)': { fontSize: '1rem' },
      '@media (min-width:1536px)': { fontSize: '1.0625rem' },
    },
    
    overline: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '0.625rem',
      lineHeight: 1.4,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      '@media (min-width:600px)': { fontSize: '0.6875rem' },
      '@media (min-width:900px)': { fontSize: '0.75rem' },
      '@media (min-width:1200px)': { fontSize: '0.75rem' },
      '@media (min-width:1536px)': { fontSize: '0.8125rem' },
    },
  },
  
  shape: { 
    borderRadius: 8 
  },
  
  spacing: 4,
  
  components: {
    MuiButton: { 
      styleOverrides: { 
        root: { 
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        } 
      } 
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'p',
          subtitle2: 'p',
          body1: 'p',
          body2: 'p',
          caption: 'span',
          overline: 'span',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: { main: '#8f3996', light: '#b262b8', dark: '#6d2a73', contrastText: '#ffffff' },
    secondary: { main: '#0ea5e9', light: '#38bdf8', dark: '#0284c7', contrastText: '#ffffff' },
    success: { main: '#10b981', contrastText: '#ffffff' },
    warning: { main: '#f59e0b', contrastText: '#ffffff' },
    error: { main: '#ef4444', contrastText: '#ffffff' },
    info: { main: '#3b82f6', contrastText: '#ffffff' },
    background: { default: '#ffffff', paper: '#f8fafc' },
    text: { primary: '#0f172a', secondary: '#475569' },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: { main: '#8f3996', light: '#b262b8', dark: '#6d2a73', contrastText: '#ffffff' },
    secondary: { main: '#0ea5e9', light: '#38bdf8', dark: '#0284c7', contrastText: '#ffffff' },
    success: { main: '#34d399', contrastText: '#ffffff' },
    warning: { main: '#fbbf24', contrastText: '#0f172a' },
    error: { main: '#f87171', contrastText: '#ffffff' },
    info: { main: '#60a5fa', contrastText: '#ffffff' },
    background: { default: '#0f172a', paper: '#1e293b' },
    text: { primary: '#f8fafc', secondary: '#cbd5e1' },
  },
});