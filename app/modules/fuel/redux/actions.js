import {ADD_GAS_STATION, REMOVE_ALL, SET_CITY_NAME, SET_ID_CITY} from './actionTypes';

export const setIdCity = (idCity) => (
    {
        type: SET_ID_CITY,
        payload: idCity,
    }
);

export const removeAll = () => (
    {
        type: REMOVE_ALL,
    }
);

