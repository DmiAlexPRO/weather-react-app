import { IHourlyForecast } from './hourlyForecast.interface';
import { IDailyForecast } from './dailyForecast.interface';

export interface IOpenMeteoRequest {
    current_weather: {
        temperature: number,
        weathercode: number,
        winddirection: number,
        windspeed: number
    },
    daily: IDailyForecast,
    daily_units: any,
    hourly: IHourlyForecast,
    hourly_units: any,
    utc_offset_seconds: number
}
