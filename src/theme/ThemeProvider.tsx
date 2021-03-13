import { createContext } from 'react';
import { theme, Theme } from './index';

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider: React.FC = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
