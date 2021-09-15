/* eslint-disable no-restricted-globals */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "../../../redux/actions";

const SignIn = ({
  login,
  setLogin,
  loginDetails,
  myStorage,
  loggedIn,
  setLoggedIn,
}) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const loginId = JSON.parse(localStorage.getItem("details"));

  const dispatch = useDispatch();
  const status = useSelector((state) => state.loginStatus);

  return (
    <div id="first">
      <div className="myform form ">
        <div className="logo mb-3">
          <div className="col-md-12 text-center">
            <h1>Login</h1>
          </div>
        </div>
        <>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              required
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <p className="text-center">
              By signing up you accept our <a href=" ">Terms Of Use</a>
            </p>
          </div>
          <div className="col-md-12 text-center ">
            <button
              onClick={() => {
                let flag = 0;
                loginId.map((user) => {
                  if (email === user.email && pwd === user.pwd) {
                    flag = 1;
                    // alert("Login Successful");
                    dispatch(loginStatus(status));
                    setLoggedIn(!loggedIn);
                    return null;
                  }
                });
                if (!flag) alert("Login failed");
                console.log(loginId);
              }}
              className=" btn btn-block mybtn btn-primary tx-tfm"
            >
              Login
            </button>
          </div>
          <div className="col-md-12 ">
            <div className="login-or">
              <hr className="hr-or" />
              <span className="span-or">or</span>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <p className="text-center">
              <a href=" " className="google btn mybtn">
                <i className="fa fa-google-plus"></i> Signup using Google
              </a>
            </p>
          </div>
          <div className="form-group">
            <p className="text-center">
              Don't have account?{" "}
              <button
                className="btn btn-sec"
                onClick={(event) => {
                  event.preventDefault();
                  setLogin(!login);
                }}
              >
                Sign up here
              </button>
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default SignIn;
