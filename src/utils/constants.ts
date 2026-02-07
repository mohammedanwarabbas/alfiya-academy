export const ROLES = {
  GUEST: 'guest',
  STUDENT: 'student',
  ADMIN: 'admin',
} as const; 

export type UserRole = typeof ROLES[keyof typeof ROLES];

// Navigation config for each role
export const NAVIGATION_CONFIG = {
  // [ROLES.GUEST]: [
  //   { label: 'Home', path: '/', icon: 'Home' },
  //   { label: 'Courses', path: '/courses', icon: 'School' },
  //   { label: 'Pricing', path: '/pricing', icon: 'AttachMoney' },
  //   { label: 'About', path: '/about', icon: 'Info' },
  //   { label: 'Contact', path: '/contact', icon: 'ContactMail' },
  // ],
    [ROLES.GUEST]: [
    { label: 'Home', path: '/', icon: 'Home' },
    { label: 'Chapters', path: '/chapters', icon: 'School' },
    { label: 'Pricing', path: '/pricing', icon: 'AttachMoney' },
    { label: 'About', path: '/about', icon: 'Info' },
    { label: 'Contact', path: '/contact', icon: 'ContactMail' },
  ],
  [ROLES.STUDENT]: [
    { label: 'Dashboard', path: '/dashboard', icon: 'Dashboard' },
    { label: 'My Courses', path: '/my-courses', icon: 'Book' },
    { label: 'Explore Courses', path: '/courses', icon: 'Explore' },
    { label: 'Progress', path: '/progress', icon: 'TrendingUp' },
    { label: 'Certificates', path: '/certificates', icon: 'CardMembership' },
  ],
  [ROLES.ADMIN]: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: 'Dashboard' },
    { label: 'Courses', path: '/admin/courses', icon: 'School' },
    { label: 'Users', path: '/admin/users', icon: 'People' },
    { label: 'Analytics', path: '/admin/analytics', icon: 'Analytics' },
    { label: 'Content', path: '/admin/content', icon: 'VideoLibrary' },
  ],
};

// Social media links
export const SOCIAL_LINKS = [
  { platform: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { platform: 'YouTube', url: 'https://youtube.com', icon: 'YouTube' },
];

// Language options
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

// User role mapping for dummy users
export const DUMMY_USER_ROLES: Record<string, UserRole> = {
  'emilys': ROLES.STUDENT,
  'michaelw': ROLES.ADMIN,
  // Add more as needed
};

export const APP_NAME = 'Alfiya Academy';

//////////////////////////////////////////////////////////////////////////////////////////////////////
// API Base URL
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE}/api/auth/login`,
    REGISTER: `${API_BASE}/api/auth/register`,
    REFRESH_TOKEN: `${API_BASE}/api/auth/refresh`,
    FORGOT_PASSWORD: `${API_BASE}/api/auth/forgot-password`,
    RESET_PASSWORD: `${API_BASE}/api/auth/reset-password`,
  },
  COURSES: {
    LIST: `${API_BASE}/api/courses`,
    FEATURED: `${API_BASE}/api/courses/featured`,
    DETAIL: (id: string) => `${API_BASE}/api/courses/${id}`,
    ENROLL: (id: string) => `${API_BASE}/api/courses/${id}/enroll`,
    PROGRESS: (id: string) => `${API_BASE}/api/courses/${id}/progress`,
  },
  CHAPTERS: {
    LIST: (courseId: string) => `${API_BASE}/api/courses/${courseId}/chapters`,
    DETAIL: (courseId: string, chapterId: string) => 
      `${API_BASE}/api/courses/${courseId}/chapters/${chapterId}`,
  },
  LESSONS: {
    DETAIL: (courseId: string, chapterId: string, lessonId: string) =>
      `${API_BASE}/api/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`,
    PROGRESS: (lessonId: string) => `${API_BASE}/api/lessons/${lessonId}/progress`,
    VIDEO_SIGNED_URL: (lessonId: string) => `${API_BASE}/api/lessons/${lessonId}/video-url`,
  },
  QUIZZES: {
    DETAIL: (lessonId: string) => `${API_BASE}/api/lessons/${lessonId}/quiz`,
    SUBMIT: (quizId: string) => `${API_BASE}/api/quizzes/${quizId}/submit`,
    ATTEMPTS: (quizId: string) => `${API_BASE}/api/quizzes/${quizId}/attempts`,
  },
  USERS: {
    PROFILE: `${API_BASE}/api/users/profile`,
    UPDATE_PROFILE: `${API_BASE}/api/users/profile`,
    CHANGE_PASSWORD: `${API_BASE}/api/users/change-password`,
    COURSES: `${API_BASE}/api/users/courses`,
    CERTIFICATES: `${API_BASE}/api/users/certificates`,
    PROGRESS: `${API_BASE}/api/users/progress`,
  },
  PAYMENTS: {
    CREATE_CHECKOUT: `${API_BASE}/api/payments/checkout`,
    VERIFY: (paymentId: string) => `${API_BASE}/api/payments/${paymentId}/verify`,
    HISTORY: `${API_BASE}/api/payments/history`,
  },
  ADMIN: {
    USERS: `${API_BASE}/api/admin/users`,
    COURSES: `${API_BASE}/api/admin/courses`,
    ANALYTICS: `${API_BASE}/api/admin/analytics`,
  },
} as const;

// HTTP Methods
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

// HTTP Status Codes (commonly used)
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// API Response Timeout (in milliseconds)
export const API_TIMEOUT = 30000; // 30 seconds

// Pagination defaults
export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Cache durations (in milliseconds)
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
} as const;