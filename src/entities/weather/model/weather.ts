import { combine, createDomain, sample } from 'effector';
import { IOpenMeteoRequest } from '@interfaces';
import { API } from '@services';
import { DefaultOpenMeteoRequest } from './consts';

export type GetOpenMeteoDataParamType = {
    latitude: number;
    longitude: number;
};

const openMeteoDomain = createDomain('openMeteo');

const openMeteoStore = openMeteoDomain.createStore<IOpenMeteoRequest>(DefaultOpenMeteoRequest);

const getOpenMeteoDataFx = openMeteoDomain.createEffect(async ({latitude, longitude}: GetOpenMeteoDataParamType) =>
    await API.openMeteo.getMeteoData(latitude, longitude).then(({data}) => data));

export const getOpenMeteoDataEvent = openMeteoDomain.createEvent<GetOpenMeteoDataParamType>();
export const clearOpenMeteoDataEvent = openMeteoDomain.createEvent();

openMeteoStore
    .on(getOpenMeteoDataFx.doneData, (_, data) => data)
    .reset(clearOpenMeteoDataEvent);

sample({
    clock: getOpenMeteoDataEvent,
    target: getOpenMeteoDataFx
});

export const $openMeteo = combine({
    isLoading: getOpenMeteoDataFx.pending,
    openMeteoWeatherData: openMeteoStore
});
