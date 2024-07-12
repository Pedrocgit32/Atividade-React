import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ToggleTheme = ({ children }) => {
    const [theme, setTheme] = useState('dark');
  
    const alterTheme = () => {        
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (        
        <ThemeContext.Provider value={{ theme, alterTheme }}>
            { children }
        </ThemeContext.Provider>              
    )
}

export default ThemeContext;