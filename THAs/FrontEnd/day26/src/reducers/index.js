import updateValueReducer from "./valueUpdate";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    user: updateValueReducer,
});

export default rootReducer;