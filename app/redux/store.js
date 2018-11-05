// Description: Redux Store Configuration

import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducer'; //Import the root reducer

const enhancer = compose(applyMiddleware(thunk));

export default createStore(reducers, enhancer);