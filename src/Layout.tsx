import React, {useEffect, useState} from 'react';
import './Layout.scss';
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import {useGeolocated} from "react-geolocated";
import {getCurrentWeatherEvent} from "./models/weather";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import {getWeatherForecast} from "./models/weather-forecast";
import {useClassName} from "./shared/utils";

const Layout: React.FC = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(true);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    const latitude = coords?.latitude;
    const longitude = coords?.longitude;

    const cn = useClassName('weather-react-app')

    useEffect(() => {
        if(latitude && longitude){
          getCurrentWeatherEvent({latitude, longitude});
          getWeatherForecast({latitude, longitude});
        }

    }, [coords]);

    return (
        <div className={cn('wrapper')}>
            {/*{(!latitude && !longitude) && <Preloader />}*/}

            <Sidebar visible={sideMenuVisible} setVisible={setSideMenuVisible}/>

            <section className={`${cn('layout')} ${sideMenuVisible ? cn('with-menu') : cn('without-menu')}`}>
                {(latitude && longitude)
                    && <Header sideMenuVisible={sideMenuVisible} btnAction={setSideMenuVisible} latitude={latitude} longitude={longitude} />}
                {(latitude && longitude) && <Main latitude={latitude} longitude={longitude}/>}
            </section>

        </div>
  );
}

export default Layout;
