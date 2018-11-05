import {combineReducers} from 'redux';

import * as t from './redux/actionTypes';

let initialState = {isLoggedIn: false};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case t.LOGGED_IN:

            console.log('LOGGED_IN');

            return {isLoggedIn: true};

        case t.LOGGED_OUT:

            console.log('LOGGED_OUT');

            return {isLoggedIn: false};

        default:
            return state;
    }
};

export default combineReducers({
    profile: profileReducer,
});
