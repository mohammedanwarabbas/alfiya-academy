import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ROLES, DUMMY_USER_ROLES } from '../../utils/constants';
import type { UserRole } from '../../utils/constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: UserRole;
  accessToken: string;
  refreshToken?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<Omit<User, 'role'> & { username?: string }>) => {
      const { username, ...userData } = action.payload;
      
      // Determine role from username
      const role = username && DUMMY_USER_ROLES[username] 
        ? DUMMY_USER_ROLES[username] 
        : ROLES.STUDENT; // Default to student
      
      state.user = {
        ...userData,
        role,
      };
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;