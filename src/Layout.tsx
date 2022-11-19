import React, { useEffect, useState } from 'react';
import './Layout.scss';
import {Header, Sidebar, Main} from '@components';
import {useGeolocated} from 'react-geolocated';

import {
    getCurrentWeatherEvent,
    getOpenMeteoDataEvent,
    getWeatherForecast
} from '@models';

import {useClassName} from '@utils';

const Layout: React.FC = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(true);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const latitude = coords?.latitude;
    const longitude = coords?.longitude;

    const cn = useClassName('weather-react-app');

    useEffect(() => {
        if (latitude && longitude) {
            getCurrentWeatherEvent({latitude, longitude});
            getWeatherForecast({latitude, longitude});
            getOpenMeteoDataEvent({latitude, longitude});
        }
    }, [coords]);

    return (
        <div className={cn('wrapper')}>
            {/* {(!latitude && !longitude) && <Preloader />} */}

            <Sidebar visible={sideMenuVisible} setVisible={setSideMenuVisible} />

            <section className={`${cn('layout')} ${sideMenuVisible ? cn('with-menu') : cn('without-menu')}`}>
                {(latitude && longitude)
                    && (
                        <Header sideMenuVisible={sideMenuVisible}
                            btnAction={setSideMenuVisible}
                            latitude={latitude}
                            longitude={longitude}
                        />
                    )}
                {(latitude && longitude) && <Main />}
            </section>

        </div>
    );
};

export default Layout;
