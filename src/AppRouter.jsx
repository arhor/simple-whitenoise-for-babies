import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '~/pages/HomePage';
import NotFound from '~/pages/NotFound';

const AppRouter = () => (
    <BrowserRouter basename={import.meta.env.ROUTER_BASE_PATH}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
