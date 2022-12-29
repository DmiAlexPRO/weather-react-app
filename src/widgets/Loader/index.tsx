import './style.scss';
import { FC } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

type LoaderPropType = {
    classNames?: string;
    comment?: string;
};

const Loader: FC<LoaderPropType> = ({classNames = '', comment= ''}) => (
    <div className={`loader ${classNames}`}>
        {comment && <p>{comment}</p>}
        <ProgressSpinner style={{width: '80px', height: '80px'}} strokeWidth="4" />
    </div>
);

export default Loader;