import {REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_LOADING} from "../types"

export default function AuthReducer(state, action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default: 
            return state;
    }
}