import {combineReducers} from 'redux';
import * as t from './redux/actionTypes';

let initialState = {
    idCity: null
};

const fuelReducer = (state = initialState, action) => {

    const {
        idCity,
    } = state;

    switch (action.type) {
        case t.SET_ID_CITY:

            const id = action.payload;
            console.log('SET_ID_CITY');
            console.log(action.payload);
            return ({idCity: id});

        case t.REMOVE_ALL :
            return ({idCity: null});

        default:

            return state;
    }
};

export default combineReducers({
    prices: fuelReducer,
});