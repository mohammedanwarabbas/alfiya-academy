import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: ThemeMode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);