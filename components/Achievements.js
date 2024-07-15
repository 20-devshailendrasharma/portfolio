import React, { Component } from 'react'

export default class Achievements extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-project" id="projects-section">
                    <div className="container">
                        <div className="row justify-content-center pb-5">
                            <div className="col-md-12 heading-section text-center ftco-animate">
                                <h1 className="big big-2">Acheivements</h1>
                                <h2 className="mb-4">My Acheivements & Certifications</h2>
                                <p>I take pride in my journey of continuous learning and growth, backed by a collection of achievements and certifications. From mastering new technologies to earning industry-recognized credentials, each achievement reflects my commitment to excellence and passion for innovation. </p>
                            </div>
                        </div>
                        <div className="row">
                           
                            <div className="col-md-8">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/smartindia.jpg)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Smart India Hackathon 2020</a></h3>
                                        <span>Runner up</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/python.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Python</a></h3>
                                        <span>From Infosys</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/ds.jpg)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Dotsquares</a></h3>
                                        <span>Inter Team Competition of CSS</span>
                                    </div>
                                </div>

                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/snowflake.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Snowflake Certification</a></h3>
                                        <span>From Udemy</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/trophy.jpg)' }}>
                                            <div className="overlay"></div>
                                            <div className="text text-center p-4">
                                                <h3><a href="#">Unmatched Dedication Award</a></h3>
                                                <span>Unmatched Dedication Award</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/mongo.png)' }}>
                                            <div className="overlay"></div>
                                            <div className="text text-center p-4">
                                                <h3><a href="#">MongoDB Certification</a></h3>
                                                <span>From Udemy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
