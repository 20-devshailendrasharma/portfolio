import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-project" id="projects-section">
                    <div className="container">
                        <div className="row justify-content-center pb-5">
                            <div className="col-md-12 heading-section text-center ftco-animate">
                                <h1 className="big big-2">Projects</h1>
                                <h2 className="mb-4">My Projects</h2>
                                <p>Welcome to my showcase of projects! Each project represents a culmination of my passion and expertise in full-stack development. From crafting intuitive user interfaces to designing robust backend systems, I've poured my creativity and problem-solving skills into these endeavors.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-5.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">BSV Academy</a></h3>
                                        <span>Web Development in Laravel</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-1.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Edfibre</a></h3>
                                        <span>Web Development in Php</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-4.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">Support Center</a></h3>
                                        <span>Web Development in Php</span>
                                    </div>
                                </div>

                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-3.png)' }}>
                                    <div className="overlay"></div>
                                    <div className="text text-center p-4">
                                        <h3><a href="#">BSV Association</a></h3>
                                        <span>Web Development in Next.js</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-6.png)' }}>
                                            <div className="overlay"></div>
                                            <div className="text text-center p-4">
                                                <h3><a href="#">Sukuma</a></h3>
                                                <span>Web Development in Php</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/project-2.png)' }}>
                                            <div className="overlay"></div>
                                            <div className="text text-center p-4">
                                                <h3><a href="#">BSV Blockchain</a></h3>
                                                <span>Web Development in Next.js</span>
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
