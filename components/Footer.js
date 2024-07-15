import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>I specialize in creating dynamic web applications, adept in both front-end and back-end development, robust database management, and effective deployment strategies. My problem-solving skills excel in fast-paced environments, turning challenges into solutions seamlessly.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginRight: '10px' }} />
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Full Stack Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Data Engineering
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLongArrowAltRight} className="mr-2" />
                      Snowflake
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Question?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-map-marker" style={{ marginRight: '10px' }} />
                      <span className="text"> Jaipur, Rajasthan, India 302017</span>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faPhone} className="icon-phone" style={{ marginRight: '10px' }} />
                        <span className="text">+91 85******27</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" style={{ marginRight: '10px' }} />
                        <span className="text">devshailendra2020@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; All rights reserved <i className="icon-heart color-danger" aria-hidden="true"></i> 
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
