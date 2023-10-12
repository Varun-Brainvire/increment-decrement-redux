import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

import rootReducer from './reducers/index'
const intialState = {};
const middleware = [thunk]
const store = createStore(
    rootReducer,
    //applyMiddleware(...middleware),
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;