import { useState } from "react";

import "./css/loginPage.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";

import { useSelector } from "react-redux";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState([]);

  var myStorage = window.localStorage;

  const status = useSelector((state) => state.loginStatus);

  return (
    <div className="container login-page-main">
      <div className="row">
        <div className="col-md-5 mx-auto">
          {status ? (
            <Profile />
          ) : login ? (
            <SignIn
              login={login}
              setLogin={setLogin}
              loginDetails={loginDetails}
              myStorage={myStorage}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            ></SignIn>
          ) : (
            <SignUp
              login={login}
              setLogin={setLogin}
              loginDetails={loginDetails}
              setLoginDetails={setLoginDetails}
              myStorage={myStorage}
            ></SignUp>
          )}
        </div>
      </div>
    </div>
  );
}
