import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faFlask, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default class Services extends Component {
  render() {
    return (
      <div>
        <section className="ftco-section" id="services-section">
          <div className="container">
            <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Services</h1>
                <h2 className="mb-4">Services</h2>
                {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="/" className="services-1">
                  <span className="icon">
                    <FontAwesomeIcon icon={faChartLine} className="flaticon-analysis" size='2x' />
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Full Stack Development</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="/" className="services-1">
                  <span className="icon">
                    <FontAwesomeIcon icon={faFlask} className="flaticon-flasks" size='2x' />
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Web Development</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="/" className="services-1">
                  <span className="icon">
                    <FontAwesomeIcon icon={faLightbulb} className="flaticon-ideas" size='2x' />
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Data Engineering</h3>
                  </div>
                </a>
              </div>

             
            </div>
          </div>
        </section>
      </div>
    );
  }
}
