import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginStart, loginSuccess, loginFailure, logout } from '../slices/auth.slice';
import authService from '../../services/auth.service';
import type { 
  // AppDispatch,
   RootState } from '../index';

export const login = createAsyncThunk(
  'auth/login',
  async (
    { username, password }: { username: string; password: string },
    { dispatch }
  ) => {
    try {
      dispatch(loginStart());
      const user = await authService.login(username, password);
      dispatch(loginSuccess({ ...user, username }));
      
      // Store tokens in localStorage
      if (user.accessToken) {
        localStorage.setItem('accessToken', user.accessToken);
      }
      if (user.refreshToken) {
        localStorage.setItem('refreshToken', user.refreshToken);
      }
      
      return user;
    } catch (error) {
       const errorMessage = error instanceof Error 
       ? error.message 
    : 'Login failed';
       dispatch(loginFailure(errorMessage));
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await authService.logout();
    dispatch(logout());
    // Clear all stored tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
);

// Check auth status on app load
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { 
    // dispatch, 
    getState }) => {
    const token = localStorage.getItem('accessToken');
    
    if (token && authService.validateToken(token)) {
      // In real app, would validate with backend
      // For now, just check token exists
      const state = getState() as RootState;
      if (!state.auth.isAuthenticated) {
        // You could fetch user profile here
      }
    }
  }
);