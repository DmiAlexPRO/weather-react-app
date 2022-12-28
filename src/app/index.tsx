import { FC } from 'react';
import RoutesProvider from './routes-provider';
import PageRoutes from './page-routes';

const Index: FC = () => (
    <RoutesProvider>
        {/* <Route element={<Auth />} key="auth" path="auth" /> */}
        <PageRoutes />
        {/* <Route */}
        {/*     element={<Navigate to={user ? '/' : '/auth'} />} */}
        {/*     key="redirect" */}
        {/*     path="*" */}
        {/* /> */}
    </RoutesProvider>
);

export default Index;
