import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

// Public Pages
import HomePage from '../pages/public/home';
import LoginPage from '../pages/auth/Login';
import StudentRegisterPage from '../pages/auth/StudentRegister';
import ForgotPasswordPage from '../pages/auth/ForgotPassword';
import NotFoundPage from '../pages/error/NotFound';

// Admin Pages
import AdminDashboard from '../pages/admin/dashboard/index';

// Student Pages  
import StudentDashboard from '../pages/student/dashboard/index';

const AppRoutes = () => {
  // const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<StudentRegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected Student Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['student', 'admin']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Routes>
              <Route path="/dashboard" element={<AdminDashboard />} />
              {/* Add other admin routes here */}
            </Routes>
          </ProtectedRoute>
        }
      />

      {/* Fallback Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;