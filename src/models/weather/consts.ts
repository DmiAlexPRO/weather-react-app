import {IWeather} from '@interfaces';

export const defaultCurrentWeather: IWeather = {
    main: {
        temp: 0,
        humidity: 0,
        pressure: 0,
    },
    name: '',
    sys: {
        country: '',
        sunrise: 0,
        sunset: 0,
    },
    weather: [{
        description: '',
        icon: '',
        main: '',
    }],
    wind: {
        deg: 0,
        gust: 0,
        speed: 0,
    },
    clouds: {
        all: 0,
    },
    timezone: 0,
    visibility: 0,
}