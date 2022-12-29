import { getWeatherIconPath, useClassName } from '@utils';
import { FC } from 'react';
import './style.scss';

type WeatherMiniaturePropType = {
    url: string,
    weekDay: string,
    temperature: number
};

export const ForecastCard: FC<WeatherMiniaturePropType> = ({url, weekDay, temperature}) => {
    const cn = useClassName('forecast-card');

    return (
        <div className={cn()}>
            <img className={cn('img')} src={getWeatherIconPath(url, 'svg')} alt="" />
            <p>{weekDay}</p>
            <p>{temperature}ºc</p>
        </div>
    );
};