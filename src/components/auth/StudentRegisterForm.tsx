import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress,
  Alert,
  Grid,
  MenuItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import { registerSchema, type RegisterFormData } from '../../utils/validators/auth.validators';

// Country codes for dropdown
const COUNTRY_CODES = [
  { code: '+1', country: 'United States' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+91', country: 'India' },
  { code: '+92', country: 'Pakistan' },
  { code: '+971', country: 'UAE' },
  { code: '+966', country: 'Saudi Arabia' },
  { code: '+20', country: 'Egypt' },
  { code: '+60', country: 'Malaysia' },
  { code: '+62', country: 'Indonesia' },
  { code: '+33', country: 'France' },
];

export const StudentRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  // const navigate = useNavigate();
  // const { login, isLoading } = useAuth();
  const isLoading = false; // Replace with actual loading state from auth context or redux

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      occupation: '',
      email: '',
      password: '',
      confirmPassword: '',
      countryCode: '+1',
      phoneNumber: '',
    },
  });

  // const password = watch('password');

  const onSubmit = async () => {
    setError('');
    setSuccess('');
    
    // TODO: Replace with actual register API call
    // For now, simulate successful registration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Auto login after registration (in real app, this would be separate API)
      // await login(data.email, data.password);
      
      setSuccess('Account created successfully! Redirecting...');
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : 'Registration failed. Please try again.';
      setError(errMessage);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {success}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            disabled={isLoading}
          />
        </Grid>
        
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            disabled={isLoading}
          />
        </Grid>
      </Grid>

<TextField
  fullWidth
  label="Occupation"
  {...register('occupation')}
  error={!!errors.occupation}
  helperText={errors.occupation?.message}
  disabled={isLoading}
  placeholder="e.g. Student, Software Engineer, Teacher"
  sx={{ mt: 3 }}
/>

      <TextField
        fullWidth
        label="Email Address"
        type="email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        disabled={isLoading}
        sx={{ mt: 3, mb: 3 }}
      />

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? 'text' : 'password'}
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        disabled={isLoading}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                disabled={isLoading}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        disabled={isLoading}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
                disabled={isLoading}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            select
            fullWidth
            label="Country Code"
            {...register('countryCode')}
            error={!!errors.countryCode}
            helperText={errors.countryCode?.message}
            disabled={isLoading}
          >
            {COUNTRY_CODES.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.code} ({option.country})
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        
        <Grid size={{ xs: 12, sm: 8 }}>
          <TextField
            fullWidth
            label="Phone Number"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            disabled={isLoading}
            placeholder="1234567890"
          />
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        By signing up, you agree to our{' '}
        <Link href="/terms" sx={{ color: 'primary.main' }}>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" sx={{ color: 'primary.main' }}>
          Privacy Policy
        </Link>
        .
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={isLoading}
        sx={{
          py: 1.5,
          mb: 3,
          borderRadius: 2,
          fontSize: '1rem',
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Create Account'
        )}
      </Button>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Already have an account?{' '}
         <Link
  component={RouterLink}
  to="/login"
  sx={{
    color: 'primary.main',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }}
>
  Sign in
</Link>
        </Typography>
      </Box>
    </Box>
  );
};