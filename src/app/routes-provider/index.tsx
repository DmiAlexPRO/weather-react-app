import { useNavigate } from 'react-router-dom';
import { Loader } from '@components';
import { FC, PropsWithChildren, Suspense } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';

const RoutesProvider: FC<PropsWithChildren> = ({children}) => (
    <ErrorBoundary navigate={useNavigate()}>
        <Suspense fallback={<Loader />}>
            {children}
        </Suspense>
    </ErrorBoundary>
);

export default RoutesProvider;
