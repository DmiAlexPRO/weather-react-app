import { Route, Routes } from 'react-router-dom';
import * as Pages from '../../pages';
import Layout from '../layout';

const ADMIN = 0; // TODO: вынести куда-нибудь
const USER = 1; // TODO: вынести куда-нибудь

const PageRoutes = () => (
    <Routes>
        <Route
            element={<Layout />}
            path="/"
            key="layout"
        >
            {Object.values(Pages)}
        </Route>
    </Routes>
);

export default PageRoutes;