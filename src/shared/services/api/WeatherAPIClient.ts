import {APIClient} from "./APIClient";
import {AxiosPromise} from "axios";
import {API_KEY} from "../../consts";
import {IWeather} from "../../interfaces/weather";

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
        return this.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    }

}
