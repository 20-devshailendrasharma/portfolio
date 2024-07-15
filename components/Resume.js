import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-no-pb" id="resume-section">
                    <div className="container">
                        <div className="row justify-content-center pb-5">
                            <div className="col-md-10 heading-section text-center ftco-animate">
                                <h1 className="big big-2">Resume</h1>
                                <h2 className="mb-4">Resume</h2>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">2022 - Current</span>
                                    <h2>Software Developer</h2>
                                    <span className="position">Dotsquares Ltd</span>
                                    <p className="mt-4">Dotsquares is a CMMi Level 3 Company. Founded in 2002, Dotsquares is a premier IT company. We specialize in providing a wide range of IT services including Web & APP development, Custom Software Development, cloud computing, and CRM consulting to businesses of all sizes and industries.</p>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">2020 - 2022</span>
                                    <h2>Php Developer</h2>
                                    <span className="position">Helpful Insight Private Limited</span>
                                    <p className="mt-4">Helpful Insight Private Limited is CMMI Certification aspirant world-renowned web & mobile application Development Company based in India.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-6 text-center ftco-animate">
                                <p><a href="/" className="btn btn-primary py-4 px-5">Download CV</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Resume;
