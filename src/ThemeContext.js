import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const theme = {
    primaryColor: 'blueviolet',
    secondaryColor: 'orange',
    defaultColor: 'white',
};

export function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);
    if (theme === undefined) {
        throw Error('useTheme must be used within ThemeProvider');
    }
    return theme;
}
