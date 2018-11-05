import {LOGGED_IN, LOGGED_OUT} from "./actionTypes";

export const loggedIn = user => (
    {
        type: LOGGED_IN,
        payload: user
    }
);

export const loggedOut = user => (
    {
        type: LOGGED_OUT,
        payload: user
    }
);