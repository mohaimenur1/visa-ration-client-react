/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            Visa-Ration
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>

              <li className="nav-item d-lg-flex align-items-center">
                {user?.uid ? (
                  <div className="me-2 d-lg-flex">
                    <li className="nav-item">
                      <Link className="nav-link">My Reviews</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link">Add Service</Link>
                    </li>
                    <button className="btn btn-custom" onClick={handleLogOut}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="d-lg-flex">
                    <li className="nav-item">
                      <Link
                        to="/login"
                        className="nav-link fw-semibold text-uppercase"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/register"
                        className="nav-link fw-semibold text-uppercase"
                      >
                        Register
                      </Link>
                    </li>
                  </div>
                )}
              </li>
              <li className="nav-item d-flex align-items-center">
                <Link>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      style={{ height: "40px" }}
                      className="rounded-circle"
                      // type="button"
                      data-toggle="tooltip"
                      data-placement="right"
                      title={user?.displayName}
                    />
                  ) : null}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
