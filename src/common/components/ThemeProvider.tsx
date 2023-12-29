import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { getThemeItem } from '../utils/theme';

const defaultDispatch = (mode: string) => {};

const ThemeContext = createContext('light');
const ThemeDispatchContext = createContext(defaultDispatch);
const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeItem() || 'light');
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeDispatch = () => {
  return useContext(ThemeDispatchContext);
};

export default ThemeProvider;
