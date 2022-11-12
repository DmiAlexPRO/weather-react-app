import {IWind} from './wind.interface';

export interface IMeasurement {
    main: {
        humidity: number,
        pressure: number,
        grnd_level: number,
        sea_level: number,
        feels_like: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    sys: {
        /*
        Probability of precipitation.
        The values of the parameter vary between 0 and 1,
        where 0 is equal to 0%, 1 is equal to 100%
        */
        pod: string
    },
    weather: {
        description: string,
        icon: string,
        main: string,
    }[],
    wind: IWind,
    clouds: {
        all: number,
    },
    visibility: number,

    // Unix time
    dt: number, // (dateTime)
    dt_txt: string, // (dateTimeText)
    pop: number,
}

export interface IWeatherForecast {
    city: {
        country: string,
        name: string,
        population: number,
        sunrise: number,
        sunset: number,
        timezone: number,
    },
    list: IMeasurement[] | undefined,

    // A number of timestamps returned in the API response
    cnt: number, // (count)
}
