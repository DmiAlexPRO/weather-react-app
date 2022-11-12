import {AxiosPromise} from 'axios';
import {API_KEY} from '@shared';
import {IWeatherForecast} from '@interfaces';
import {APIClient} from './APIClient';

/**
 * API клиент для работы с прогнозом погоды
 */
export class WeatherForecastAPIClient extends APIClient {
    /**
     * Получение прогноза погоды по координатам
     *
     * @param latitude - широта.
     * @param longitude - долгота.
     * @returns {AxiosPromise<IWeatherForecast>}
     */
    // eslint-disable-next-line class-methods-use-this
    getTimeMachine(latitude: number, longitude: number): AxiosPromise<IWeatherForecast> {
        return this.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
    }
}