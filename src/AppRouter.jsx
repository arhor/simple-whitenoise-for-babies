import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '~/pages/HomePage';
import NotFound from '~/pages/NotFound';
import Settings from '~/pages/Settings';

const AppRouter = () => (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*"         element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
