import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, SET_LOADING } from "../types";

export default function AuthState(props) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const initialState = {
        isAuthenticated: false,
        loading: true,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setLoading = (state) => {
        dispatch({
            type: SET_LOADING,
            payload: state,
        });
    };

    const register = async () => {
        setLoading(true);
        await sleep(1000);
        dispatch({
            type: REGISTER_SUCCESS,
        });
    };

    const login = async () => {
        setLoading(true);
        await sleep(1000);
        dispatch({
            type: LOGIN_SUCCESS,
        });
    };

    const logout = () => {
        setLoading(true);
        sleep(1000).then(() => dispatch({
            type: LOGOUT,
        }));
    };

    return (
        <AuthContext.Provider
        value={{
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            register,
            login,
            logout,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}