import {FC, PropsWithChildren} from 'react';
import { Outlet } from 'react-router-dom';

interface IPrivateProps {
    redirectPath?: string,
    roles?: number[]
}

const Private: FC<PropsWithChildren<IPrivateProps>> = ({
    redirectPath = '/',
    roles = [],
    children
}) => {
    // const { user } = useContext(Auth);
    // const userRole = user && user.userRole;
    // const location = useLocation();

    // if (!user) {
    //     return <Navigate to={redirectPath} replace state={{from: location.pathname}} />;
    // }

    return <Outlet />;
};

export default Private;