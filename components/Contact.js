import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapSigns, faPhoneAlt, faPaperPlane, faGlobe } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    render() {
        return (
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center py-5 mt-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 class="big big-2">Contact</h1>
                            <h2 class="mb-4">Contact Me</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    <div className="row d-flex contact-info mb-5">
                        <div className="col-md-6 col-lg-3 d-flex ">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faMapSigns} size="2x" style={{ color: '#ffbd39' }} />
                                </div>
                                <h3 className="mb-4">Address</h3>
                                <p>Jaipur, Rajasthan, India 302017</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="2x" style={{ color: '#ffbd39' }} />
                                </div>
                                <h3 className="mb-4">Contact Number</h3>
                                <p><a href="tel://1234567920">+91 85******27</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{ color: '#ffbd39' }} />
                                </div>
                                <h3 className="mb-4">Email Address</h3>
                                <p><a href="mailto:info@yoursite.com">devshailendra2020@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: '#ffbd39' }} />
                                </div>
                                <h3 className="mb-4">Website</h3>
                                <p><a href="#">yoursite.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-light p-4 p-md-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="img" style={{ backgroundImage: 'url(images/person-2.jpg)' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
