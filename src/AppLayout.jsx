import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppRouter from '@/AppRouter';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { StoreProvider } from '@/store';
import { ThemeProvider } from '@/theme';

const AppLayout = () => (
    <ThemeProvider>
        <CssBaseline />
        <ErrorBoundary>
            <StoreProvider>
                <Container component="main" maxWidth="sm">
                    <AppRouter />
                </Container>
            </StoreProvider>
        </ErrorBoundary>
    </ThemeProvider>
);

export default AppLayout;
