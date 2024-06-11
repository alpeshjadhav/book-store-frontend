import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigate("/", { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <div className="row m-2">
          <h1 className="text-center">Please sign in</h1>
          <div className="col-md-4 offset-md-4">
            <div className="card p-5">
              <form onSubmit={handleSignIn}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="abc@xyz.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <hr />
              <div className="row text-center">
                <div className="col-6">
                  <Link to={"/"}>Forget Password?</Link>
                </div>
                <div className="col-6">
                  <Link to={"/register"}>Sign-up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
