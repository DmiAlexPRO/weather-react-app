export const WEEKDAYS_ENG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const WEEKDAYS_RU = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятрица', 'Суббота', 'Воскресенье'];
export const KELVIN = 273.15;

export const API_KEY = '21b376557b9e12ee5ac9341ae3edafab';

export const WEATHER_INTERPRETATION_CODES_ENG: Map<number, string> = new Map([
    [0, 'Clear sky'],
    [1, 'Mainly clear'],
    [2, 'Partly cloudy'],
    [3, 'Overcast'],
    [45, 'Fog'],
    [48, 'Depositing rime fog'],
    [51, 'Light drizzle'],
    [53, 'Moderate drizzle'],
    [55, 'Dense drizzle'],
    [56, 'Light freezing drizzle'],
    [57, 'Dense freezing drizzle'],
    [61, 'Slight rain'],
    [63, 'Moderate rain'],
    [65, 'Heavy rain'],
    [66, 'Light freezing rain'],
    [67, 'Heavy freezing rain'],
    [71, 'Slight snow fall'],
    [73, 'Moderate snow fall'],
    [75, 'Heavy snow fall'],
    [77, 'Snow grains'],
    [80, 'Slight rain showers'],
    [81, 'Moderate rain showers'],
    [82, 'Heavy rain showers'],
    [85, 'Slight snow showers'],
    [86, 'Heavy snow showers'],
    [95, 'Slight or moderate thunderstorm'],
    [96, 'Thunderstorm with slight hail'],
    [99, 'Thunderstorm with heavy hail]']
]);

export const WEATHER_INTERPRETATION_CODES_RU: Map<number, string> = new Map([
    [0, 'Безоблачно'],
    [1, 'В основном ясно'],
    [2, 'Переменная облачность'],
    [3, 'Пасмурно'],
    [45, 'Туман'],
    [48, 'Осаждающий иней туман'],
    [51, 'Легкий моросящий дождь'],
    [53, 'Moderate drizzle'],
    [55, 'Умеренный моросящий дождь'],
    [56, 'Light freezing drizzle'],
    [57, 'Легкий ледяной дождь'],
    [61, 'Небольшой дождь'],
    [63, 'Moderate rain'],
    [65, 'Умеренный дождь'],
    [66, 'Легкий ледяной дождь'],
    [67, 'Сильный ледяной дождь'],
    [71, 'Легкий снегопад'],
    [73, 'Умеренный снегопад'],
    [75, 'Сильный снегопад'],
    [77, 'Снежные зерна'],
    [80, 'Легкий дождевые ливни'],
    [81, 'Умеренные дождевые ливни'],
    [82, 'Сильные дождевые ливни'],
    [85, 'Легкие снежные дожди'],
    [86, 'Сильные снежные ливни'],
    [95, 'Небольшая или умеренная гроза'],
    [96, 'Гроза с небольшим градом'],
    [99, 'Гроза с сильным градом']
]);
