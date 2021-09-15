import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import updateTotalReducer from './updateTotalReducer';
import filterReducer from './filterReducer';
import favoritesReducer from './favoritesReducer';
import loginReducer from "./loginReducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    total: updateTotalReducer,
    shop: filterReducer,
    favorites: favoritesReducer,
    loginStatus: loginReducer
});

export default rootReducer;