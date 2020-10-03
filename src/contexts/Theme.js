import React, {createContext, useState, useContext} from 'react';
import light from '../themes/light';
import dark from '../themes/dark';

const Context = createContext();

export const useTheme = () => useContext(Context);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(light);

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Context.Provider value={{theme, handleTheme}}>{children}</Context.Provider>
  );
};
