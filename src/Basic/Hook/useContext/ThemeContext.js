// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a Context for the theme with a default value of 'light'
const ThemeContext = createContext('light');

// Create a Provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    // Toggle theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
