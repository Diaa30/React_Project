import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark-color  py-4">
        <div class="container">
          <Link
            class="navbar-brand text-white text-uppercase fs-2 fw-bold"
            to="/"
          >
            Start framework
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link
                  class="nav-link text-white text-uppercase ms-2 fw-bold active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white text-uppercase ms-2 fw-bold"
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white text-uppercase ms-2 fw-bold"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
