import React, { Component } from 'react';

class Counters extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
                    <div className="container">
                        <div className="row d-md-flex align-items-center">
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number" data-number={5}>5+</strong>
                                        <span>Awards</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number" data-number={12}>12+</strong>
                                        <span>Complete Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number" data-number={12}>12+</strong>
                                        <span>Happy Customers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <strong className="number" data-number={5}>5+ Years</strong>
                                        <span>Journey</span>
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

export default Counters;
