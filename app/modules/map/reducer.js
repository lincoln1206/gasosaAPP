import {combineReducers} from 'redux';
import * as t from './redux/actionTypes';

let initialState = {
    defaultCity: null,
    gas_stations: [],
};

const mapReducer = (state = initialState, action) => {

    const {
        gas_stations,
        defaultCity
    } = state;

    switch (action.type) {
        case t.ADD_GAS_STATION:
            gas_stations.push(action.payload);
            return {gas_stations, defaultCity};

        case t.DEFAULT_CITY:
            const idCity = action.payload;
            return {gas_stations, defaultCity: idCity};

        default:
            return state;
    }
};

export default combineReducers({
    map: mapReducer,
});