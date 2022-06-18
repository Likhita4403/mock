import React from 'react';
import About from '../home/About';
import Login from '../home/Login';

import { NavLink, Routes, Route, Link } from 'react-router-dom';
function Header() {
  return (
    <>

      <div className='display-1'>Header</div>

      {/* links to routes */}
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">Easy Shop</NavLink>
          <div className='dropdown'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle docs navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="products">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="contact us">Contact us</NavLink>
                </li>
              </ul>
              <div className="buttons">
                {/* Login button */}
                <NavLink to="/about" className="btn btn-outline-dark ">
                  <i className="me-1"></i>Register</NavLink>
                {/* Register button */}
                <NavLink to="/login" className="btn btn-outline-dark ms-2 navlink active">
                  <i className="me-1"></i>Login</NavLink>
                {/* Cart button */}
                <NavLink to="/cart " className="btn btn-outline-dark ms-2 navlink active">
                  <i className="me-1"></i>Cart</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <About/>
    <Login/>
    </>
  )

}


export default Header;