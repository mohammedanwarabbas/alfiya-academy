import { z } from 'zod';

export const VALIDATION_LIMITS = {
  NAME: {
    MIN: 2,
    MAX: 50,
  },
  OCCUPATION: {
    MIN: 2,
    MAX: 50,
  },
  EMAIL: {
    MAX: 100,
  },
  PASSWORD: {
    MIN: 8,
    MAX: 100,
  },
  PHONE: {
    MIN: 7,
    MAX: 15,
  },
  COUNTRY_CODE: {
    MIN: 1,
    MAX: 4,
  },
} as const;

// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .max(VALIDATION_LIMITS.EMAIL.MAX, `Email must be at most ${VALIDATION_LIMITS.EMAIL.MAX} characters`),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(VALIDATION_LIMITS.PASSWORD.MIN, `Password must be at least ${VALIDATION_LIMITS.PASSWORD.MIN} characters`)
    .max(VALIDATION_LIMITS.PASSWORD.MAX, `Password must be at most ${VALIDATION_LIMITS.PASSWORD.MAX} characters`),
});

// Register Schema
export const registerSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(VALIDATION_LIMITS.NAME.MIN, `First name must be at least ${VALIDATION_LIMITS.NAME.MIN} characters`)
    .max(VALIDATION_LIMITS.NAME.MAX, `First name must be at most ${VALIDATION_LIMITS.NAME.MAX} characters`),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(VALIDATION_LIMITS.NAME.MIN, `Last name must be at least ${VALIDATION_LIMITS.NAME.MIN} characters`)
    .max(VALIDATION_LIMITS.NAME.MAX, `Last name must be at most ${VALIDATION_LIMITS.NAME.MAX} characters`),
    occupation: z
    .string()
    .min(1, 'Occupation is required')
    .min(VALIDATION_LIMITS.NAME.MIN, `Occupation must be at least ${VALIDATION_LIMITS.NAME.MIN} characters`)
    .max(VALIDATION_LIMITS.NAME.MAX, `Occupation must be at most ${VALIDATION_LIMITS.NAME.MAX} characters`),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .max(VALIDATION_LIMITS.EMAIL.MAX, `Email must be at most ${VALIDATION_LIMITS.EMAIL.MAX} characters`),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(VALIDATION_LIMITS.PASSWORD.MIN, `Password must be at least ${VALIDATION_LIMITS.PASSWORD.MIN} characters`)
    .max(VALIDATION_LIMITS.PASSWORD.MAX, `Password must be at most ${VALIDATION_LIMITS.PASSWORD.MAX} characters`),
  confirmPassword: z
    .string()
    .min(1, 'Confirm password is required'),
  countryCode: z
    .string()
    .min(1, 'Country code is required')
    .min(VALIDATION_LIMITS.COUNTRY_CODE.MIN, `Country code must be at least ${VALIDATION_LIMITS.COUNTRY_CODE.MIN} characters`)
    .max(VALIDATION_LIMITS.COUNTRY_CODE.MAX, `Country code must be at most ${VALIDATION_LIMITS.COUNTRY_CODE.MAX} characters`),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .min(VALIDATION_LIMITS.PHONE.MIN, `Phone number must be at least ${VALIDATION_LIMITS.PHONE.MIN} digits`)
    .max(VALIDATION_LIMITS.PHONE.MAX, `Phone number must be at most ${VALIDATION_LIMITS.PHONE.MAX} digits`)
    .regex(/^\d+$/, 'Phone number must contain only digits'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Types
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;