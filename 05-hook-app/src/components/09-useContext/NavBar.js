import React from 'react'
import {
    NavLink,
    NavNavLink
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div id="navbarNav">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
