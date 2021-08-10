import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import locDataReducer from './locDataReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    locData: locDataReducer,
});

export default rootReducer;