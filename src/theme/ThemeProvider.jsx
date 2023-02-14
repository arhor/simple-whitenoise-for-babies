import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AppThemeControlContext = createContext({});

function determineColorMode(shouldUseDarkTheme) {
    return shouldUseDarkTheme ? 'dark' : 'light';
}

export const ThemeProvider = ({children}) => {
    const [colorMode, setColorMode] = useState();
    const darkThemePreferred = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() => createTheme({
        palette: {
            mode: colorMode ?? determineColorMode(darkThemePreferred),
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
