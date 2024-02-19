import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { darkTheme, theme } from '../styles/theme';

const ThemeContext = React.createContext({});

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <ThemeContext.Provider value={darkMode ? darkTheme : theme}>
      {children}

      <Switch value={darkMode} onValueChange={setDarkMode} />
    </ThemeContext.Provider>
  );
}
