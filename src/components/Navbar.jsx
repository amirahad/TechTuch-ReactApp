import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    return (
        <div className='header' id='header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-sm navbar-light">
                            <div className="container">
                                <Link className="navbar-brand" to="hero" >TechTuch</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <ul className="nav navbar-nav ">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="hero" activeClass="active" spy={true} smooth={true} duration="1000">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="services" activeClass="active" spy={true} smooth={true} duration="1000">Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="about" activeClass="active" spy={true} smooth={true} duration="1000">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="contact" activeClass="active" spy={true} smooth={true} duration="1000">Contact</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}
