import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"
import UserContext from "./auth/UserContext";

function NavBar({logoutUser}) {
    const {currentUser} = useContext(UserContext);

    console.debug("Navigation", "currentUser=", currentUser);
    const loggedInLinks = (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <Link to="/" onClick={logoutUser}>Logout</Link>
        </>
    )
    const loggedOutLinks = (
        <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </>
    )
    return (
        <nav>
            { currentUser !== null ? loggedInLinks : loggedOutLinks }
        </nav>
    );
}

export default NavBar;