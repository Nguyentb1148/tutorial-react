// ThemeToggler.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';  // Import the ThemeContext

function ThemeToggler() {
    const { theme, toggleTheme } = useContext(ThemeContext);  // Use useContext to get theme and toggleTheme

    return (
        <div>
            <p>The current theme is {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>  {/* Button to toggle theme */}
        </div>
    );
}

export default ThemeToggler;
