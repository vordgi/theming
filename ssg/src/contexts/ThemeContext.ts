import { createContext } from 'react';
import type { Theme } from '../types/theme';

export type ThemeContextType = {
  theme: Theme;
  onChangeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  onChangeTheme: () => {},
});

export default ThemeContext;
