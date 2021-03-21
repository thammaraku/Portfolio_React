import React from 'react'

function Services() {
    return (
        <section className="section" id="services">
            <div className="section-heading">
                <h3 className="title is-2">Services</h3>
                <h4 className="subtitle is-5">What can I do for you?</h4>
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">Front End Web Development</h4>
                  Develop Front End using latest standards with HTML5/CSS3 with added funtionality using
                  JavaScript.
                </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">Back End Web Development</h4>
                  Develop Back End application/service using Node.js and SQL server or Mongo DB
                  databases.
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services