import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/">Home</Link></li>
            <li className="navbar__item">
                <Link className="nav-link" to="/scoresheet">Score Sheet</Link></li>
            <li className="navbar__item">
                <Link className="nav-link" to="/analytics">Analytics</Link></li>
            {
                (localStorage.getItem("frss_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link"
                            onClick={() => {
                                localStorage.removeItem("frss_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
            
    )
}