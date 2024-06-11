import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export const Register = () => {
  // Consume functions from AuthContext using useContext hook
  const { signUpWithGoogle, createUser } = useContext(AuthContext);

  // Retrieve the current location using useLocation hook
  const location = useLocation();
  // It returns the current location object representing the current URL.

  // Get a function to navigate programmatically to different routes in the application using useNavigate hook
  const navigate = useNavigate();
  // It returns a function that allows you to navigate programmatically to different routes in your application.

  // Extract the 'from' path from the location state or set it to '/' if not available
  const from = location.state?.from?.pathname || "/";

  // Function to handle Google sign-up
  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then((resuls) => {
        const user = resuls.user;
        console.log("user " + user.email);
        console.log(resuls);
      })
      .catch((error) => console.log(error));
  };

  // Function to handle regular sign-up
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <div className="row m-2">
          <h1 className="text-center">Sign-up</h1>
          <div className="card p-5 col-md-4 offset-md-4">
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary me-1">
                  Sign-up
                </button>
                Already have an account?
                <Link to="/login">Login</Link>
              </div>
            </form>
            <button
              className="btn btn-primary mt-1"
              onClick={handleGoogleSignUp}
            >
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
