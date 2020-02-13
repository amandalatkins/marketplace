import React from "react";
import { useCartContext } from "../utils/CartState";
import { Link } from "react-router-dom";

function NavBar({ isLoggedIn }) {

    const [state] = useCartContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Best Buyzon</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                        >Home</Link>
                    </li>
                    <li className="nav-item">
                    {isLoggedIn ? 
                        (<Link
                            to="/cart"
                            className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
                        >Cart &nbsp;<span className="badge badge-secondary">{state.length}</span></Link>)
                        :
                        (<Link
                            to="/login"
                            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                        >Login/Register</Link>)
                        }
                    </li>
                    <li className="nav-item">
                    {isLoggedIn ? 
                        (<Link
                            to="/logout"
                            className={window.location.pathname === "/login?but=logout" ? "nav-link active" : "nav-link"}
                        >Log Out</Link>)
                        :
                        ""
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;