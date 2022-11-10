import "./style.scss"
import WeatherMiniature from "./components/WeatherMiniature";
import {$currentWeather} from "../../models/weather";
import {useStore} from "effector-react";
import {KELVIN, WEEKDAYS_ENG, WEEKDAYS_RU} from "../../shared/consts";
import {$weatherForecast} from "../../models/weather-forecast";
import {DateTime} from 'luxon';
import {Carousel} from "primereact/carousel";
import {IMeasurement} from "../../shared/interfaces";
import {useClassName} from "../../shared/utils";

export type MainPropType = {
    latitude: number;
    longitude: number;
};

export const getIconPath = (iconName: string, iconType: 'svg' | 'jpg' | 'png' | 'gif' = 'svg') =>
    `img/animated/${iconName}.${iconType}`; // TODO: вынести в утилиту

const Main: React.FC<MainPropType> = ({latitude, longitude }) => {
    const {currentWeather,  isLoading: isCurrentWeatherLoading} = useStore($currentWeather);
    const {weatherForecast, isLoading: isWeatherForecastLoading} = useStore($weatherForecast);
    const isLoading =  isCurrentWeatherLoading || isWeatherForecastLoading;
    const imgSrc = getIconPath(currentWeather?.weather[0].icon)
    const dayOfWeek = WEEKDAYS_ENG[new Date().getDay()];
    const temperature = Math.ceil(currentWeather.main.temp - KELVIN);
    const weatherStatus = currentWeather.weather[0].main;

    const cn = useClassName('weather-app-main')

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const measurementTemplate: React.FC<IMeasurement> = (data: IMeasurement) => {
        const now = DateTime.fromSeconds(data.dt);

        return (
            <WeatherMiniature
                temperature={Math.ceil(data.main.temp - KELVIN)} //TODO: вынести в утилиту
                url={data.weather[0].icon}
                weekDay={`${WEEKDAYS_RU[now.weekday - 1]} - ${now.toLocaleString()} - ${now.hour}:00`} //TODO: вынести в утилиту
            />
        );
    };

    return (
        <div className={cn()}>
            <div className={cn('actual')}>
                {
                    <div className={cn('container')}>
                        <p>{dayOfWeek}</p>
                        <img src={imgSrc} alt=""/>
                        <p> {temperature}°<span>c</span></p>
                        <p>{weatherStatus}</p>
                        <div className="Punto" ></div>
                    </div>
                }
            </div>
            <div>
                <Carousel className={cn('carousel')}
                    value={weatherForecast.list  || []}
                    numVisible={4}
                    numScroll={4}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={measurementTemplate}
                />
            </div>
        </div>
    );
}

export default Main;