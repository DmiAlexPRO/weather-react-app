import {IWeatherForecast} from '@interfaces';

export const defaultWeatherForecast: IWeatherForecast = {
    city: {
        country: '',
        name: '',
        population: 0,
        sunrise: 0,
        sunset: 0,
        timezone: 0,
    },
    list: undefined,
    cnt: 0,
}