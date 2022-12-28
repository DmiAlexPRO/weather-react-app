import {WeatherAPIClient} from './WeatherAPIClient';
import {WeatherForecastAPIClient} from './WeatherForecastAPIClient';
import { OpenMeteoAPIClient } from './OpenMeteoAPIClient';

export const API = Object.freeze({
    weather: new WeatherAPIClient(),
    timeMachine: new WeatherForecastAPIClient(),
    openMeteo: new OpenMeteoAPIClient()
});