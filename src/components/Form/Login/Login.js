import React, { useState } from 'react';
import googleLogo from '../../../images/google-logo-9824-32x32.ico'
import twitterLogo from '../../../images/logo-twitter-png-5860-32x32.ico';
import logo from '../../../images/logo.png'
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, googleLogin, setUser, setIsLoading, twitterLogin, authError } = useAuth();

  const location = useLocation();
  const uri = location?.state?.from || "/home";
  const history = useHistory();


  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field,value)
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    alert('hello');
    // loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle(location, history)
  // }

  //google

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
        <img src={logo} alt="" className="py-5" />
        <div className="shadow form-div mx-auto pb-5 pt-3">
          <div className="mb-4">
            <h3 className="fw-bold text-uppercase">Login</h3>
          </div>
          <div className="login-form">
            <form onSubimt={handleLoginSubmit}>
              <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleOnChange} />
              <br /><br />
              <input type="password" name="password" id="password" onChange={handleOnChange} />
              <br /> <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>

            </form>
            <br /><br />
          </div>
          <div>
            <button
              onClick={redirectGoogle}
              className="mx-3 shadow rounded-circle btn"
            >
              <img src={googleLogo} alt="" />
            </button>
            <button
              onClick={redirectTwitter}
              className="mx-3 shadow rounded-circle btn"
            >
              <img src={twitterLogo} alt="" />
            </button>
          </div>
          <div className="mt-4">
            <h6>Don't have an account?</h6>
            <Link to="/register">
              <button className="btn btn-outline-warning fw-bold text-dark">
                Register
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;