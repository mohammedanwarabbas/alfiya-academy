import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { AuthLayout } from '../../components/auth/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // TODO: Implement forgot password API
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive reset instructions"
    >
      {success ? (
        <Box>
          <Alert severity="success" sx={{ mb: 3 }}>
            Password reset instructions have been sent to your email.
          </Alert>
          <Button
            fullWidth
            variant="contained"
            href="/login"
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Back to Login
          </Button>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Enter the email address associated with your account and we'll send
            you instructions to reset your password.
          </Typography>
          
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            sx={{ mb: 3 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading || !email}
            sx={{
              py: 1.5,
              mb: 2,
              borderRadius: 2,
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Send Reset Instructions'
            )}
          </Button>
          
          <Button
            fullWidth
            variant="text"
            href="/login"
            sx={{ py: 1 }}
          >
            Back to Login
          </Button>
        </Box>
      )}
    </AuthLayout>
  );
}