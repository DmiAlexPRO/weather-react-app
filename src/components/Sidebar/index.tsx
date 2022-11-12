import "./style.scss"
import {Sidebar as PrimeReactSidebar} from "primereact/sidebar";
import React from "react";
import {useClassName} from "@utils";

export type NavigationPropType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
};

const Sidebar: React.FC<NavigationPropType> = ({visible, setVisible}) => {
    const cn = useClassName('weather-app-sidebar')
    return (
        <PrimeReactSidebar visible={visible}
            position="left"
            onHide={() => setVisible(false)}
            showCloseIcon={true}
            dismissable={false}
            closeOnEscape={false}
            blockScroll={false}
            modal={false}
            className={cn()}
        >
            <div className={cn('weather-data')}>

                <h6>Actual info</h6>
                <hr/>
                <div className={cn('weather-info')}>
                    <p className="title">Wind speed:</p>
                    <span className="value">12321</span>
                </div>

                <div className={cn('weather-info')}>
                    <p className="title">Humidity:</p>
                    <span className="value">22</span>
                </div>

                <div className={cn('weather-info')}>
                    <p className="title">Cloudiness:</p>
                    <span className="value">12</span>
                </div>

                <div className={cn('weather-info')}>
                    <p className="title">Visibility:</p>
                    <span className="value">312312</span>
                </div>

                <div className={cn('weather-info')}>
                    <p className="title">Direction of the wind:</p>
                    <span className="value">1231</span>
                </div>

            </div>

            <div className={cn('actual-time')}>
                <p className="clock">22:39:28 PM</p>
            </div>

            <div className={cn('copyright')}>
                <p>Todos los derechos reservados(c)- Weater App</p>
            </div>
        </PrimeReactSidebar>
    );
}

export default Sidebar;