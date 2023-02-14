import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppRouter from '@/AppRouter';
import { StoreProvider } from '@/store';
import { ThemeProvider } from '@/theme';

const AppLayout = () => (
    <ThemeProvider>
        <CssBaseline />
        <StoreProvider>
            <Container component="main" maxWidth="sm" sx={{ p: 5 }}>
                <AppRouter />
            </Container>
        </StoreProvider>
    </ThemeProvider>
);

export default AppLayout;
