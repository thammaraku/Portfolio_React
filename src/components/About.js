import React from 'react'
import thammarakPhoto from '../images/thammarak_photo_320_320.jpg'

function About() {
    return (
        <section className="section" id="about">
            {/* Title */}
            <div className="section-heading">
                <h3 className="title is-2">About Me</h3>
                <div className="container">
                    <p>I live in Austin, TX. Currently studying in <strong>UT Full Stack Web Developer coding
                bootcamp.</strong>
                        <br />Having knowledge of web development both front-end and back-end. <br />Looking for an opportunity
              to work
              and
              develop new things after graduated!
            </p>
                </div>
            </div>

            <div className="columns has-same-height is-gapless">
                <div className="column">
                    {/* Profile */}
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <table className="table-profile">
                                    <tbody><tr>
                                        <td>
                                            <figure className="image ml-0 is-64x64">
                                                <img className="is-rounded" src={thammarakPhoto} alt="thammarak_photo" />
                                            </figure>
                                        </td>
                                        <td>
                                            <h3 className="title is-4 media-content">Thammarak<br />
                      Uppayokhin
                    </h3>
                                        </td>
                                    </tr>
                                        <tr>
                                            <th colSpan={1} />
                                            <th colSpan={2} />
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>Austin, TX</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>512-278-1032</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>samui.island28@gmail.com</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            {/* <br> */}
                            <div className="buttons has-addons is-centered">
                                <a href="https://github.com/thammaraku" className="button is-link">Github</a>
                                <a href="https://www.linkedin.com/in/thammarak-uppayokhin-425234133/" className="button is-link">LinkedIn</a>
                                <a href="" className="button is-link">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    {/* Skills */}
                    <div className="card">
                        <div className="card-content skills-content">
                            <h3 className="title is-4">Skills</h3>
                            <div className="content">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>JS</strong>
                                                <br />
                                                <progress className="progress is-primary" value={100} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Node.js</strong>
                                                <br />
                                                <progress className="progress is-primary" value={100} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>HTML5/CSS3</strong>
                                                <br />
                                                <progress className="progress is-primary" value={100} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>mySQL</strong>
                                                <br />
                                                <progress className="progress is-primary" value={100} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>MongoDB</strong>
                                                <br />
                                                <progress className="progress is-primary" value={66} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>React</strong>
                                                <br />
                                                <progress className="progress is-primary" value={5} max={100} />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About