import React from "react";
import {getIconPath} from "../../index";
import './style.scss';
import {useClassName} from "../../../../shared/utils";

type WeatherMiniaturePropType = {
    url: string,
    weekDay: string,
    temperature: number
};

const WeatherMiniature: React.FC<WeatherMiniaturePropType> = ({url, weekDay, temperature}) => {
    const cn = useClassName('forecast-card');

    return (
        <div className={cn()}>
            <img className={cn('img')} src={getIconPath(url, 'svg')} alt=""/>
            <p>{weekDay}</p>
            <p>{temperature}ºc</p>
        </div>
    );
};

export default WeatherMiniature;