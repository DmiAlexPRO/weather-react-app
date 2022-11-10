import {WeatherAPIClient} from "./WeatherAPIClient";
import {WeatherForecastAPIClient} from "./WeatherForecastAPIClient";

export const API = Object.freeze({
    weather: new WeatherAPIClient(),
    timeMachine: new WeatherForecastAPIClient(),
});