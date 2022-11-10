export interface IWeather {
    main: {
        temp: number,
        humidity: number,
        pressure: number,
    },
    name: string,
    sys: {
        country: string,
        sunrise: number,
        sunset: number,
    },
    weather: {
        description: string,
        icon: string,
        main: string,
    }[],
    wind: {
        deg: number,
        gust: number,
        speed: number,
    },
    clouds: {
        all: number,
    },
    timezone: number,
    visibility: number,
}
