import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> {
        return (
            <>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">GlobalNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/business" className="nav-link">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/entertainment" className="nav-link">Entertainment</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sports
                                    </div>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                                        <li><Link className="dropdown-item" to="/football">Football</Link></li>
                                        <li><Link className="dropdown-item" to="/hockey">Hockey</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/science" className="nav-link">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/health" className="nav-link">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/technology" className="nav-link">Technology</Link>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </>
        )
}
export default Navbar
