import React, { useState } from 'react';
import googleLogo from "../../../images/google-logo-9824-32x32.ico";
import twitterLogo from "../../../images/logo-twitter-png-5860-32x32.ico";
import logo from "../../../images/logo.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, authError, googleLogin, setUser, setIsLoading, twitterLogin } = useAuth();
  const location = useLocation();
  const uri = location?.state?.from || "/home";
  


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData)
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    alert('hello');
    // if (loginData.password !== loginData.password2) {
    //   alert('Your password did not match');
    //   return
    // }
    // registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  }


  //google redirect
  const redirectGoogle = () => {
    googleLogin()
      .then((result) => {
        history.push(uri);
        const user = result.user;
        setUser(user);
        toast.success("Login Success!!");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //twitter

  const redirectTwitter = () => {
    twitterLogin()
      .then((result) => {
        history.push(uri);
        const user = result.user;
        setUser(user);
        toast.success("Login Success!!");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-img">
      <div className="container my-5 py-5">
        <img src={logo} alt="logo" className="py-5" />
        <div className="shadow form-div mx-auto pb-5 pt-3">
          <div className="mb-4">
            <h3 className="fw-bold text-uppercase">Register</h3>
          </div>

          <div className="login-form">
            <form onSubimt={handleLoginSubmit}>
              <input type="Text" name="name" id="name" placeholder="Your Name" onBlur={handleOnBlur} />
              <br /><br />
              <input type="email" name="email" id="email" placeholder="Your Email" onBlur={handleOnBlur} />
              <br /><br />
              <input type="password" name="password" id="password" placeholder="Your Password" onBlur={handleOnBlur} />
              <br /><br />
              <input type="password" name="password2" id="password2" placeholder="Re-Type Your Password" onBlur={handleOnBlur} />
              <br /> <br />
              <input type="submit" value="Register" />

            </form>

           

          </div>
          <br /><br />
          <div>
            <button
              onClick={redirectGoogle}
              className="mx-3 shadow rounded-circle btn"
            >
              <img src={googleLogo} alt="google" />
            </button>
            <button
              onClick={redirectTwitter}
              className="mx-3 shadow rounded-circle btn"
            >
              <img src={twitterLogo} alt="twitter" />
            </button>
          </div>
          <div className="mt-4">
            <h6>Already have an account?</h6>
            <Link to="/login">
              <button className="btn btn-outline-warning fw-bold text-dark">
                Login
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
