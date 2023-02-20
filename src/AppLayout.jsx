import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppRouter from '~/AppRouter';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { ThemeProvider } from '~/theme';

const AppLayout = () => (
    <ThemeProvider>
        <CssBaseline />
        <ErrorBoundary>
            <Container component="main">
                <AppRouter />
            </Container>
        </ErrorBoundary>
    </ThemeProvider>
);

export default AppLayout;
