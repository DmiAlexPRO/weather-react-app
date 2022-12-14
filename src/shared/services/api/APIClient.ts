import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';

/**
 * Абстрация API клиента
 */
export class APIClient {
    /**
   * Абстракция GET запросов
   * @param url - URL запроса
   * @param options - дополнительные опции
   * @returns {AxiosPromise<any>}
   */
    // eslint-disable-next-line class-methods-use-this
    get(url: string, options?: AxiosRequestConfig): AxiosPromise<any> {
        return axios.get(url, options);
    }
}