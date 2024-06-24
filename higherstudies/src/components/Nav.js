import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  text-decoration-none fs-5 text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-decoration-none fs-5 text-white"
                  to="/Compdata"
                >
                 Competitive Data
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-decoration-none fs-5 text-white"
                  to="/HigherStud"
                >
                  Higher Studies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  text-decoration-none fs-5 text-white"
                  to="/"
                >
                  Exit
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
