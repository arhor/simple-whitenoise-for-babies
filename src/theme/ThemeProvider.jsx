import { createContext, useContext, useMemo, useState } from 'react';

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AppThemeControlContext = createContext({});

function determineColorMode(shouldUseDarkTheme) {
    return shouldUseDarkTheme ? 'dark' : 'light';
}

export const COLORS = Object.freeze({
    BROWN: 'brown',
    PINK: 'pink',
    PURPLE: 'purple',
    WHITE: 'white',
});

export const ThemeProvider = ({children}) => {
    const [colorMode, setColorMode] = useState();
    const darkThemePreferred = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() => createTheme({
        palette: {
            mode: colorMode ?? determineColorMode(darkThemePreferred),
            [COLORS.BROWN]: {
                main: '#A52A2A',
            },
            [COLORS.PINK]: {
                main: '#FFC0CB',
            },
            [COLORS.PURPLE]: {
                main: '#800080',
            },
            [COLORS.WHITE]: {
                main: '#FFFFFF',
            },
        },
    }), [colorMode, darkThemePreferred]);

    const appThemeControl = {
        toggleColorMode() {
            setColorMode((prev) => determineColorMode(prev === 'light'));
        },
    };
    
    return (
        <AppThemeControlContext.Provider value={appThemeControl}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </AppThemeControlContext.Provider>
    );
};

export function useAppThemeControl() {
    return useContext(AppThemeControlContext);
}
