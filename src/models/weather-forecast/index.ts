import {combine, createDomain, sample} from "effector/compat";

import {API} from "../../shared/services";
import {defaultWeatherForecast} from "./consts";
import {IWeatherForecast} from "../../shared/interfaces/weather";


const weatherForecastDomain = createDomain('timeMachine');

const weatherForecastStore = weatherForecastDomain.createStore<IWeatherForecast>(defaultWeatherForecast);

const getWeatherForecastFx = weatherForecastDomain.createEffect(async (
  {latitude, longitude}: {latitude: number, longitude: number}
) => {
  return await API.timeMachine.getTimeMachine(latitude, longitude).then(({data}) => data);
});

export const getWeatherForecast= weatherForecastDomain
  .createEvent<{latitude: number, longitude: number}>();
export const clearTimeMachineEvent = weatherForecastDomain.createEvent();

weatherForecastStore
  .on(getWeatherForecastFx.doneData, (_, forecast) => forecast)
  .reset(clearTimeMachineEvent);

sample({
  clock: getWeatherForecast,
  target: getWeatherForecastFx
});

export const $weatherForecast = combine({
  isLoading: getWeatherForecastFx.pending,
  weatherForecast: weatherForecastStore
});