import './style.scss';
import { Component, ReactNode } from 'react';
import {NavigateFunction} from 'react-router-dom';
import { IFunction } from '@interfaces';

interface IDecoratorsProps {
    children: ReactNode
    navigate: NavigateFunction
}

interface IState {
    error: Error | null,
    errorInfo: { componentStack: string } | null
}

class ErrorBoundary extends Component<IDecoratorsProps, IState> {
    constructor(props: IDecoratorsProps) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error: Error | null, errorInfo: {componentStack: string}) {
        this.setState({error, errorInfo});
    }

    // cn: IFunction = () => {};

    goToHomePage = () => {
        this.setState({error: null, errorInfo: null});
        const {navigate} = this.props;
        navigate('/');
    };

    reloadPage = () => {
        this.setState({ error: null, errorInfo: null });
        const { navigate } = this.props;
        navigate(0);
    };

    render() {
        const {children} = this.props;
        const {errorInfo, error } = this.state;

        if (errorInfo) {
            return (
                <div>
                    <h1>Shit happened</h1>
                    <p>errorInfo.componentStack</p>
                </div>
                
            );
        }

        return children;
    }
}

export default ErrorBoundary;