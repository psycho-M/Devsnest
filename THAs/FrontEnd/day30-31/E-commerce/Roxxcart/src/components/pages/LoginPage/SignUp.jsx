import { Link } from "react-router-dom";
import Profile from "./Profile";
const SignUp = ({
  login,
  setLogin,
  loginDetails,
  setLoginDetails,
  myStorage,
}) => {
  var loginDetail = {
    fname: "",
    lname: "",
    email: "",
    pwd: "",
  };
  const ld = { ...loginDetail };
  return (
    <div id="second">
      <div className="myform form ">
        <div className="logo mb-3">
          <div className="col-md-12 text-center">
            <h1>Signup</h1>
          </div>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              id="firstname"
              aria-describedby="emailHelp"
              placeholder="Enter Firstname"
              onChange={(e) => {
                loginDetail.fname = e.target.value;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              id="lastname"
              aria-describedby="emailHelp"
              placeholder="Enter Lastname"
              onChange={(e) => {
                loginDetail.lname = e.target.value;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                loginDetail.email = e.target.value;
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
              onChange={(e) => {
                loginDetail.pwd = e.target.value;
              }}
            />
          </div>
          <div className="col-md-12 text-center mb-3">
            <button
              onClick={() => {
                setLoginDetails([loginDetail]);
                if (JSON.stringify(ld) === JSON.stringify(loginDetail)) return;
                alert(
                  ` ===  Account Created === \n FirstName : ${loginDetail.fname} \n LastName: ${loginDetail.lname} \n Email: ${loginDetail.email} \n Password: ${loginDetail.pwd} \n === Use the data above to login ===`
                );
                myStorage.setItem(
                  "details",
                  JSON.stringify([...loginDetails, loginDetail])
                );
                document.querySelector("#firstname").value = "";
                document.querySelector("#lastname").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";
              }}
              className="btn btn-block mybtn btn-primary tx-tfm"
            >
              Get Started For Free
            </button>
          </div>
          <div className="col-md-12 ">
            <div className="form-group">
              <p className="text-center">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setLogin(!login);
                  }}
                  className="btn btn-sec"
                  id="signin"
                >
                  Already have an account?
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
