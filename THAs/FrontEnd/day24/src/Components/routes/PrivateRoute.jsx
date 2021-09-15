import React, { useContext } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import AuthContext from "../auth/authContext"

export default function PrivateRoute({componenet: Component, ...rest}) {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        <Route {...rest} 
            render = {props => !isAuthenticated ? <Redirect to='/' /> : <Component {...props} />} 
        />
    );
};