import React from "react";
import "../../css/App.css";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import DashBoard from "./DashBoard";
import PrivateRoute from "./PrivateRoute";
import AuthState from "../auth/AuthState";


export default function Rout() {
    return (
        <Router>
            <AuthState>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>


                <section className="App">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <Route exact path='/about' component={About} />
                        <PrivateRoute exact path='/dashboard' component={DashBoard} />
                    </Switch>
                </section>
            </AuthState>
        </Router>
    );
}






