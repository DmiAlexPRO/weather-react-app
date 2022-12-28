import { Header, Sidebar } from '@components';
import React, { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useClassName } from '@utils';
import { getCurrentWeatherEvent, getOpenMeteoDataEvent, getWeatherForecast } from '@models';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(true);

    const {coords} = useGeolocated({
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

    // TODO: вынести логику запроса данных на страницу??
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
                {/* {(latitude && longitude) && <Main />} */}
                <Outlet />
            </section>

        </div>
    );
};

export default Layout;