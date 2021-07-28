import React, { useContext } from "react";
import AuthContext from "../auth/authContext"
// import { LOGOUT } from "../context/types"

export default function Home() {
    const authContext = useContext(AuthContext);
    console.log(authContext);
    const {login, isAuthenticated, logout, loading} = authContext;
    
    return(
        <section>
            <h1>HOME</h1>
            <h2>If not logged in, you cannot access Profile & DashBoard</h2>

            {loading ? <p>Loading...</p> : !isAuthenticated ? (
                <button onClick={login}>Login</button>
            ) : (
                <button onClick={logout}>Logout</button>
            )}
        </section>
    );
}