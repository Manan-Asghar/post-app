import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import DDIT from './imges/ddit.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img
              src={DDIT}  // Replace with the path to your logo image
              alt="Logo"
              width="50"  // Adjust the width as needed
              height="50" // Adjust the height as needed
              // className="d-inline-block align-top"
            />
          </Link>
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
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <Link className="nav-link" to="about">
                About
              </Link>
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
