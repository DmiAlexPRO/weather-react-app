import { FC, PropsWithChildren } from 'react';

interface ICelsiusSignPropType extends PropsWithChildren {

}

const CelsiusSign: FC<ICelsiusSignPropType> = ({children}) => { // TODO: доделать
    return (
        <p>{children}°<span>c</span></p>
    );
};

export default CelsiusSign;