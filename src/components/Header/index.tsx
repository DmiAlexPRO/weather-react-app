import React from "react";
import './style.scss';
import {useStore} from "effector-react";
import {$currentWeather} from "@models";
import {Button} from "primereact/button";
import {useClassName} from "@utils";

export type HeaderPropType = {
    latitude: number;
    longitude: number;
    btnAction: React.Dispatch<React.SetStateAction<boolean>>;
    sideMenuVisible: boolean;
};

const Header: React.FC<HeaderPropType> = ({latitude, longitude,sideMenuVisible, btnAction}) => {
    const cn = useClassName('weather-app-header');

    const {currentWeather, isLoading} = useStore($currentWeather);
    const currentDate = new Date().toLocaleDateString();
    const country = currentWeather.sys.country;
    const city = currentWeather.name;

    return (
        <header className={cn()}>
                <div>
                    {
                        !sideMenuVisible &&
                            <Button icon="pi pi-bars"
                                className={`${cn('sidebar-btn')} p-button p-button-text`}
                                aria-label="button"
                                onClick={() => btnAction(prev => !prev)}
                            />
                    }
                </div>
                <div>
                    <p className={cn('position')}>{country} - {city}</p>
                </div>
                <div>
                    <p className={cn('current-date')}>{currentDate}</p>
                </div>
        </header>
    );}

export default Header;