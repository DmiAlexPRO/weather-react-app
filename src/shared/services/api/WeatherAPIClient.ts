import {AxiosPromise} from 'axios';
import {API_KEY} from '@shared';
import {IWeather} from '@interfaces';
import {APIClient} from './APIClient';

/**
 * API клиент для работы с погодой
 */
export class WeatherAPIClient extends APIClient {
    /**
     * Получение погоды по координатам
     *
     * @param latitude - широта.
     * @param longitude - долгота.
     * @returns {AxiosPromise<IWeather>}
     */
    getCurrentWeather(latitude: number, longitude: number): AxiosPromise<IWeather> {
        return this.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
    }
}
