import {combineReducers} from 'redux';

import {reducer as fuelReducer} from "../modules/fuel/index"
import {reducer as mapReducer} from "../modules/map/index"
import {reducer as profileReducer} from "../modules/profile/index"

const rootReducer = combineReducers({fuelReducer, mapReducer, profileReducer});

export default rootReducer;