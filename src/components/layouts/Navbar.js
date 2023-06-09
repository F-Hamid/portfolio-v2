import React from "react";
import { Link } from "react-router-dom";
import "../../sass/layouts/navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://www.upwork.com/freelancers/~01e7abd7e3523da42a"
        >
          <img
            className="logo"
            src={require("./../../images/logo.png")}
            alt="hamidweb"
          />
          <h2 className="hamidweb">hamidweb</h2>
        </a>
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
              <a className="nav-link " aria-current="page" href="#about">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#services">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#testimonial">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link active "
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
