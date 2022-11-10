import {APIClient} from "./APIClient";
import {AxiosPromise} from "axios";
import {API_KEY} from "../../consts";
import {IWeatherForecast} from "../../interfaces/weather";

/**
 * API клиент для работы с прогнозом погоды
 */
export class WeatherForecastAPIClient extends APIClient {

  /**
   * Получение прогноза погоды по координатам TODO: поправить!
   *
   * @param latitude - широта.
   * @param longitude - долгота.
   * @param longitude - unix время.
   * @returns {AxiosPromise<IWeatherForecast>}
   */
  getTimeMachine(latitude: number, longitude: number): AxiosPromise<IWeatherForecast> {
    const days = 4;
    return this.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
  }

}