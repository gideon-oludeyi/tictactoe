import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const theme = {
    primaryColor: '#9729ED',
    secondaryColor: '#ED4D29',
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
