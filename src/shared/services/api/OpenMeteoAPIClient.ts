import {AxiosPromise} from 'axios';
import {IOpenMeteoRequest} from '@interfaces';
import {APIClient} from './APIClient';

/**
 * API клиент для работы с погодой
 */
export class OpenMeteoAPIClient extends APIClient {
    /**
     * Получение погоды по координатам
     *
     * @param latitude - широта.
     * @param longitude - долгота.
     * @returns {AxiosPromise<IWeather>}
     */
    getMeteoData(latitude: number, longitude: number): AxiosPromise<IOpenMeteoRequest> {
        return this.get(
            // eslint-disable-next-line max-len
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,freezinglevel_height,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,winddirection_10m,windgusts_10m,soil_temperature_0cm,shortwave_radiation,direct_radiation,diffuse_radiation,direct_normal_irradiance,terrestrial_radiation,shortwave_radiation_instant,direct_radiation_instant,diffuse_radiation_instant,direct_normal_irradiance_instant,terrestrial_radiation_instant&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=auto`
        );
    }
}
