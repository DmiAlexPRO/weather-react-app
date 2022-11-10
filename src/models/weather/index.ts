import {API} from '../../shared/services';
import {combine, createDomain, sample} from "effector";
import {IWeather} from "../../shared/interfaces/weather";
import {defaultCurrentWeather} from "./consts";

export type Coords = {
    latitude: number;
    longitude: number;
}

const weatherDomain = createDomain('weather');

const weatherStore = weatherDomain.createStore<IWeather>(defaultCurrentWeather);

const getCurrentWeatherFx = weatherDomain.createEffect(async ({latitude, longitude}: Coords) => {
    return await API.weather.getCurrentWeather(latitude, longitude).then(({data}) => data)
});

export const getCurrentWeatherEvent = weatherDomain.createEvent<{latitude: number, longitude: number}>();
export const clearCurrentWeatherEvent = weatherDomain.createEvent();

weatherStore
    .on(getCurrentWeatherFx.doneData, (_, weather) => weather)// TODO: тут можно сконвертировать данные из типа в тип
    .reset(clearCurrentWeatherEvent);

sample({
    clock: getCurrentWeatherEvent,
    target: getCurrentWeatherFx,
});

export const $currentWeather = combine({
    isLoading: getCurrentWeatherFx.pending,
    currentWeather: weatherStore,
})