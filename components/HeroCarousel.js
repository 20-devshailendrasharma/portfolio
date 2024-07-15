import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
    return (
        <section id="home-section" className="hero">
            <Carousel showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} showThumbs={false} >
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                            <div className="one-third js-fullheight order-md-last img " style={{ backgroundImage: 'url(/images/person-2.png)' }}>
                                <div className="overlay"></div>
                            </div>
                            <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                <div className="text">
                                    <span className="subheading">Hello!</span>
                                    <h1 className="mb-4 mt-3">I'm <span className="subheadingspan">Shailendra Sharma</span></h1>
                                    <h2 className="mb-4">A Full Stack Developer</h2>
                                    <p>
                                        <a href="#" className="btn btn-primary py-3 px-4">Hire me</a>
                                        <a href="#projects-section" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                            <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(/images/person-3.png)' }}>
                                <div className="overlay"></div>
                            </div>
                            <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                <div className="text">
                                    <span className="subheading">Hello!</span>
                                    <h1 className="mb-4 mt-3">I'm a <span>web Developer</span> </h1>
                                    <p>
                                        <a href="#" className="btn btn-primary py-3 px-4">Hire me</a>
                                        <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Carousel>
        </section>
    );
}

export default HeroCarousel;
