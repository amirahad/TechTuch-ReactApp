import React from 'react'

export default function Navbar() {
    return (
        <div className='header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-sm navbar-transparent">
                            <div className="container">
                                <a className="navbar-brand" href >LAWDE</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav ms-auto">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li className="nav-item active">
                                                <a className="nav-link" href>Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href=".service">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href>About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href >Contact</a>
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
