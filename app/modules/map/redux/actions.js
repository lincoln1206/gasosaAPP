import * as t from './actionTypes';

export const addMarker = marker => (
    {
        type: t.ADD_GAS_STATION,
        payload: marker,
    }
);

export const setDefaultCity = idCity => (
    {
        type: t.DEFAULT_CITY,
        payload: idCity,
    }
);