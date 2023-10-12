import changeNumber from "./upDown";
import apiCall from './api'

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    apiCall: apiCall,
})

export default rootReducer