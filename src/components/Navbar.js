import React from 'react'

function Navbar() {
    return (
            <section className="navbar is-link is-fixed-top header-image">
                <div className="navbar-brand">
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item" href="#about">
                            <span className="icon">
                                <i className="fas fa-info" />
                            </span>
                            <span>About</span>
                        </a>
                        <a className="navbar-item" href="#services">
                            <span className="icon">
                                <i className="fas fa-bars" />
                            </span>
                            <span>Services</span>
                        </a>
                        <a className="navbar-item" href="#resume">
                            <span className="icon">
                                <i className="fas fa-file-alt" />
                            </span>
                            <span>Resume</span>
                        </a>
                        <a className="navbar-item" href="#portfolio">
                            <span className="icon">
                                <i className="fas fa-th-list" />
                            </span>
                            <span>Portfolio</span>
                        </a>
                        <a className="navbar-item" href="#contact">
                            <span className="icon">
                                <i className="fas fa-envelope" />
                            </span>
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </section>
    )
}

export default Navbar