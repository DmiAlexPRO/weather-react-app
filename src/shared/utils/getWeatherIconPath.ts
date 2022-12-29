export const getWeatherIconPath = (iconName: string, iconType: 'svg' | 'jpg' | 'png' | 'gif' = 'svg') =>
    `img/animated/${iconName}.${iconType}`;