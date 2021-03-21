import React from 'react'
import travel_journal_page_1 from '../images/travel_journal_page_1.png'
import travel_journal_page_2 from '../images/travel_journal_page_2.png'
import Project1_Tyndre from '../images/Project1_Tyndre.gif'
import homework_10_note_taker from '../images/homework_10_note_taker.png'
import burger_app_screenshot from '../images/burger_app_screenshot.png'
import employee_tracker from '../images/employee_tracker.gif'

function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Portfolio</h3>
                    <h4 className="subtitle is-5">My latest projects</h4>
                </div>
                <br />
                <div className="container portfolio-container">
                    <div className="columns">
                        {/* LEFT COLUMN */}
                        <div className="column is-4">
                            {/* Travel Journal */}
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Travel Journal</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-white" />
                                            <span className="tag is-info">JS</span>
                                            <span className="tag is-primary">mySQL</span>
                                            <span className="tag is-warning">APIs</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img src="./assets/images/travel_journal_page_1.png" alt="burger_tracker_application_screenshot" />
                                        <img src={travel_journal_page_1} alt="travel_journal_application_screenshot1" />
                                        <img src={travel_journal_page_2} alt="travel_journal_application_screenshot2" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://travel--journal.herokuapp.com/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/thammaraku/My_Travel_Journal" className="card-footer-item">Source
                      Code</a>
                                </footer>
                            </div>
                        </div>
                        {/* MIDDLE COLUMN */}
                        <div className="column is-4">
                            {/* Tyndre */}
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Tyndre Date Planning</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-white" />
                                            <span className="tag is-info">JS</span>
                                            <span className="tag is-warning">APIs</span>
                                            <span className="tag is-danger">HTML</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img src={Project1_Tyndre} alt="tyndre_date_planning_application_screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://thammaraku.github.io/Tyndre/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/thammaraku/Tyndre" className="card-footer-item">Source
                      Code</a>
                                </footer>
                            </div>
                            {/* NoteTaker */}
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Note Taker</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-white" />
                                            <span className="tag is-info">JS</span>
                                            <span className="tag is-danger">HTML</span>
                                            <span className="tag is-warning">NodeJS</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img src={homework_10_note_taker} alt="note_taker_application_screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://peaceful-refuge-30198.herokuapp.com/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/thammaraku/Note_taker" className="card-footer-item">Source
                      Code</a>
                                </footer>
                            </div>
                        </div>
                        {/* RIGHT COLUMN */}
                        <div className="column is-4">
                            {/* Burger Logger */}
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Burger Logger</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-white" />
                                            <span className="tag is-info">JS</span>
                                            <span className="tag is-primary">mySQL</span>
                                            <span className="tag is-danger">Handlebars</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img src={burger_app_screenshot} alt="burger_tracker_application_screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://still-coast-35905.herokuapp.com/" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/thammaraku/Hamburger_Logger" className="card-footer-item">Source
                      Code</a>
                                </footer>
                            </div>
                            {/* Employee Manager */}
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Employee Manager</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-white" />
                                            <span className="tag is-info">JS</span>
                                            <span className="tag is-primary">mySQL</span>
                                            <span className="tag is-warning">NodeJS</span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img src={employee_tracker} alt="employee_manager_application_screenshot" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="https://drive.google.com/file/d/1qxNqydiStuOPSKAvcExYGyTlE93gTM6T/view?usp=sharing" className="card-footer-item">Preview</a>
                                    <a href="https://github.com/thammaraku/Employee_Manager" className="card-footer-item">Source
                      Code</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio