import { useNavigate } from 'react-router-dom';
import { FC, PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary, Loader } from '@widgets';

const RoutesProvider: FC<PropsWithChildren> = ({children}) => (
    <ErrorBoundary navigate={useNavigate()}>
        <Suspense fallback={<Loader />}>
            {children}
        </Suspense>
    </ErrorBoundary>
);

export default RoutesProvider;
