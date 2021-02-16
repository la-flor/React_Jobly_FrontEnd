import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar({userToken}) {
    const loggedInLinks = (
        <>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/companies">Companies</NavLink>
            <NavLink exact to="/jobs">Jobs</NavLink>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/logout">Logout</NavLink>
        </>
    )
    const loggedOutLinks = (
        <>
            <NavLink exact to="/login">Login</NavLink>
            <NavLink exact to="/signup">Signup</NavLink>
        </>
    )
    return (
        <nav>
            { userToken !== null ? loggedInLinks : loggedOutLinks }
        </nav>
    );
}

export default NavBar;