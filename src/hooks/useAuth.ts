import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useAppDispatch';
import { login, logoutUser, checkAuth } from '../store/thunks/auth.thunk';
import { updateUser } from '../store/slices/auth.slice';
import type { User } from '../store/slices/auth.slice';
import type { UserRole } from '../utils/constants';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth 
  );

  const handleLogin = useCallback(
    async (username: string, password: string) => {
      return dispatch(login({ username, password })).unwrap();
    },
    [dispatch]
  );

  const handleLogout = useCallback(async () => {
    await dispatch(logoutUser()).unwrap();
  }, [dispatch]);

  const updateUserProfile = useCallback(
    (userData: Partial<User>) => {
      dispatch(updateUser(userData));
    },
    [dispatch]
  );

  const checkAuthStatus = useCallback(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const hasRole = useCallback(
    (role: UserRole | UserRole[]) => {
      if (!user) return false;
      if (Array.isArray(role)) {
        return role.includes(user.role);
      }
      return user.role === role;
    },
    [user]
  );

  const isGuest = !isAuthenticated;
  const isStudent = hasRole('student');
  const isAdmin = hasRole('admin');

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
    updateUser: updateUserProfile,
    checkAuth: checkAuthStatus,
    hasRole,
    isGuest,
    isStudent,
    isAdmin,
  };
};