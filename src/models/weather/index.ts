import {API} from '@services';
import {combine, createDomain, sample} from 'effector';
import {IWeather} from '@interfaces';
import {defaultCurrentWeather} from './consts';

export type GetCurrentWeatherParamType = {
    latitude: number;
    longitude: number;
};

const weatherDomain = createDomain('weather');

const weatherStore = weatherDomain.createStore<IWeather>(defaultCurrentWeather);

const getCurrentWeatherFx = weatherDomain.createEffect(async ({latitude, longitude}: GetCurrentWeatherParamType) =>
    await API.weather.getCurrentWeather(latitude, longitude).then(({data}) => data));

export const getCurrentWeatherEvent = weatherDomain.createEvent<GetCurrentWeatherParamType>();
export const clearCurrentWeatherEvent = weatherDomain.createEvent();

weatherStore
    .on(getCurrentWeatherFx.doneData, (_, weather) => weather)// тут можно сконвертировать данные из типа в тип
    .reset(clearCurrentWeatherEvent);

sample({
    clock: getCurrentWeatherEvent,
    target: getCurrentWeatherFx,
});

export const $currentWeather = combine({
    isLoading: getCurrentWeatherFx.pending,
    currentWeather: weatherStore,
});
