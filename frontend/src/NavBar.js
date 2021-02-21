import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"
import UserContext from "./auth/UserContext";

function NavBar({logoutUser}) {
    const {currentUser} = useContext(UserContext);

    const loggedInLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink to="/companies">Companies</NavLink></li>
            <li className="nav-item"><NavLink to="/jobs">Jobs</NavLink></li>
            <li className="nav-item"><NavLink to="/profile">Profile</NavLink></li>
            <li className="nav-item"><Link to="/" onClick={logoutUser}>Logout</Link></li>
        </ul>
    )
    const loggedOutLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink to="/signup">Signup</NavLink></li>
        </ul>
    )
    return (

        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                Jobly
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { currentUser !== null ? loggedInLinks : loggedOutLinks }
            </div>
        </nav>
    );
}

export default NavBar;