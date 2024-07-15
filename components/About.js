import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-6 col-lg-5 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay"></div>
                  <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(/images/person-1.jpg)' }}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h1 className="big">About</h1>
                    <h2 className="mb-4">About Me</h2>
                    <p>I specialize in creating dynamic web applications, adept in both front-end and back-end development, robust database management, and effective deployment strategies. My problem-solving skills excel in fast-paced environments, turning challenges into solutions seamlessly.</p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex"><span>Name:</span> <span>Shailendra Sharma</span></li>
                      <li className="d-flex"><span>Date of birth:</span> <span>July 15, 1997</span></li>
                      <li className="d-flex"><span>Address:</span> <span>Jaipur, Rajasthan, India </span></li>
                      <li className="d-flex"><span>Zip code:</span> <span>302017</span></li>
                      <li className="d-flex"><span>Email:</span> <span>devshailendra2020@gmail.com</span></li>
                      <li className="d-flex"><span>Phone: </span> <span>+91 85******27</span></li>
                    </ul>
                  </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                  <div className="text">
                    <p className="mb-4">
                      <span className="number" data-number="120">12+ </span>
                      <span> Project complete</span>
                    </p>
                    <p><a href="#" className="btn btn-primary py-3 px-3">Download CV</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
