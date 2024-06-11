import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout done!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <h1>MBS</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
            </ul>

            <div className="d-flex text-end m-2">
              {user && <span className="m-2">{user.email}</span>}

              {user ? (
                <Link className="nav-link btn btn-danger " to={"/"}>
                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to={"/login"}>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-2"
                    >
                      Login
                    </button>
                  </Link>
                  <Link className="nav-link" to={"/register"}>
                    <button type="button" className="btn btn-warning me-2">
                      Sign-up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
