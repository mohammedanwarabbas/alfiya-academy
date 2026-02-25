import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { ProtectedRoute } from '../components/common/ProtectedRoute';

// Public Pages
import HomePage from '../pages/public/home/HomePage';
import AboutPage from '../pages/public/about/AboutPage';
import ContactPage from '../pages/public/contact/ContactPage';
import LoginPage from '../pages/auth/LoginPage';
import StudentRegisterPage from '../pages/auth/StudentRegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import NotFoundPage from '../pages/error/NotFoundPage';
import CoursePage from '../pages/mock/CoursePage';
import LessonPage from '../pages/mock/LessonPage';

// Admin Pages
// import AdminDashboard from '../pages/admin/dashboard/AdminDashboardPage';

// Student Pages  
// import StudentDashboard from '../pages/student/dashboard/StudentDashboardPage';

const AppRoutes = () => {
  // const { isAuthenticated, isAdmin } = useAuth();

  return (
    <Routes>

<Route path="/mock/course" element={<CoursePage />} />
<Route path="/mock/lesson/:lessonId" element={<LessonPage />} />
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<StudentRegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route path="/mock/course" element={<ContactPage />} /> */}

      {/* Protected Student Routes */}
      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={['student', 'admin']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      /> */}

      {/* Protected Admin Routes */}
      <Route
        path="/admin/*"
        
        // element={
          
        //   <ProtectedRoute allowedRoles={['admin']}>
        //     <Routes>
        //       <Route path="/dashboard" element={<AdminDashboard />} />
        //       {/* Add other admin routes here */}
        //     </Routes>
        //   </ProtectedRoute>
        // }
      />

      {/* Fallback Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;