export const ROLES = {
  GUEST: 'guest',
  STUDENT: 'student',
  ADMIN: 'admin',
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAVIGATION_CONFIG = {
  [ROLES.GUEST]: [
    { label: 'Home',     path: '/',        icon: 'Home' },
    { label: 'Course', path: '/mock/course', icon: 'MenuBook' },
    // { label: 'Pricing',  path: '/pricing',  icon: 'AttachMoney' },
    { label: 'About',    path: '/about',    icon: 'Info' },
    { label: 'Contact',  path: '/contact',  icon: 'ContactMail' },
  ],
  [ROLES.STUDENT]: [
    { label: 'Dashboard',   path: '/dashboard',   icon: 'Dashboard' },
    { label: 'Chapters',    path: '/chapters',    icon: 'MenuBook' },
    { label: 'Progress',    path: '/progress',    icon: 'TrendingUp' },
    { label: 'Certificate', path: '/certificate', icon: 'CardMembership' },
  ],
  [ROLES.ADMIN]: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: 'Dashboard' },
    { label: 'Chapters',  path: '/admin/chapters',  icon: 'MenuBook' },
    { label: 'Users',     path: '/admin/users',     icon: 'People' },
    { label: 'Analytics', path: '/admin/analytics', icon: 'Analytics' },
    { label: 'Publish',   path: '/admin/version',   icon: 'Publish' },
  ],
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  { platform: 'Facebook',  url: 'https://facebook.com',  icon: 'Facebook' },
  { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { platform: 'YouTube',   url: 'https://youtube.com',   icon: 'YouTube' },
];

// ─── App ──────────────────────────────────────────────────────────────────────

export const APP_NAME = 'Alfiya Academy';

// ─── API ──────────────────────────────────────────────────────────────────────

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {

  AUTH: {
    REGISTER:        `${API_BASE}/api/v1/auth/register`,
    VERIFY_EMAIL:    `${API_BASE}/api/v1/auth/verify-email`,
    LOGIN:           `${API_BASE}/api/v1/auth/login`,
    LOGOUT:          `${API_BASE}/api/v1/auth/logout`,
    FORGOT_PASSWORD: `${API_BASE}/api/v1/auth/forgot-password`,
    RESET_PASSWORD:  `${API_BASE}/api/v1/auth/reset-password`,
    PROFILE:         `${API_BASE}/api/v1/auth/profile`,
  },

  CONTENT: {
    VERSION:                          `${API_BASE}/api/v1/content/version`,
    CHAPTERS:                         `${API_BASE}/api/v1/content/chapters`,
    LESSONS_BY_CHAPTER: (chapterId: string) =>
                                      `${API_BASE}/api/v1/content/chapters/${chapterId}/lessons`,
    LESSON_QUIZ: (lessonId: string) =>
                                      `${API_BASE}/api/v1/content/lessons/${lessonId}/quiz`,
  },

  VIDEO: {
    SIGNED_ACCESS: (lessonId: string) => `${API_BASE}/api/v1/video/${lessonId}`,
  },

  QUIZ: {
    SUBMIT: (lessonId: string) => `${API_BASE}/api/v1/content/lessons/${lessonId}/quiz`,
  },

  PROGRESS: {
    GET_LESSON:    (lessonId: string) => `${API_BASE}/api/v1/progress/lesson/${lessonId}`,
    UPDATE_LESSON: (lessonId: string) => `${API_BASE}/api/v1/progress/lesson/${lessonId}`,
  },

  PAYMENT: {
    CREATE_INTENT: `${API_BASE}/api/v1/payment/create-intent`,
    WEBHOOK:       `${API_BASE}/api/v1/payment/webhook`,      // backend only, not called from frontend directly
  },

  CERTIFICATE: {
    GET: `${API_BASE}/api/v1/certificate`,
  },

  ADMIN: {
    // Chapters
    CHAPTERS:              `${API_BASE}/api/v1/admin/chapters`,
    CHAPTER: (id: string) => `${API_BASE}/api/v1/admin/chapters/${id}`,

    // Lessons
    LESSONS:                           `${API_BASE}/api/v1/admin/lessons`,
    LESSON:    (id: string) =>          `${API_BASE}/api/v1/admin/lessons/${id}`,
    LESSONS_BY_CHAPTER: (chapterId: string) =>
                                        `${API_BASE}/api/v1/admin/chapters/${chapterId}/lessons`,

    // Quiz
    QUIZ:                              `${API_BASE}/api/v1/admin/quiz`,
    QUIZ_BY_LESSON: (lessonId: string) => `${API_BASE}/api/v1/admin/lessons/${lessonId}/quiz`,
    QUIZ_QUESTIONS: (quizId: string) => `${API_BASE}/api/v1/admin/quiz/${quizId}/questions`,

    // Version / Publish
    VERSION_PUBLISH: `${API_BASE}/api/v1/admin/version/publish`,
    VERSION_PREVIEW: `${API_BASE}/api/v1/admin/version/preview`,

    // Users
    USERS:               `${API_BASE}/api/v1/admin/users`,
    USER: (id: string) => `${API_BASE}/api/v1/admin/users/${id}`,
  },

} as const;

// ─── HTTP ─────────────────────────────────────────────────────────────────────

export const HTTP_STATUS = {
  OK:                    200,
  CREATED:               201,
  BAD_REQUEST:           400,
  UNAUTHORIZED:          401,
  FORBIDDEN:             403,
  NOT_FOUND:             404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const API_TIMEOUT = 30000;

// ─── Pagination ───────────────────────────────────────────────────────────────

export const PAGINATION_DEFAULTS = {
  PAGE:      1,
  LIMIT:     10,
  MAX_LIMIT: 100,
} as const;

// ─── Progress ─────────────────────────────────────────────────────────────────

export const PROGRESS = {
  COMPLETE_PERCENT:   90,    // video is "watched" after 90%
  HEARTBEAT_INTERVAL: 10000, // send heartbeat every 10 seconds (ms)
} as const;

// ─── Payment ──────────────────────────────────────────────────────────────────

export const PAYMENT = {
  CURRENCY: 'INR',
} as const;

// ─── Cache ────────────────────────────────────────────────────────────────────

export const CACHE_DURATION = {
  SHORT:  5  * 60 * 1000,
  MEDIUM: 30 * 60 * 1000,
  LONG:   24 * 60 * 60 * 1000,
} as const;