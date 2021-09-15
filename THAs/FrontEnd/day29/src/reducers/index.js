import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import locDataReducer from './locDataReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    locData: locDataReducer,
    theme: themeReducer,
});

export default rootReducer;