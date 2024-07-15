import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section" id="blog-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 heading-section text-center ftco-animate">
                                <h1 className="big big-2">Blogs</h1>
                                <h2 className="mb-4">My Blogs</h2>
                                <p>Welcome to my digital space where I share insights, experiences, and deep dives into topics that matter to me. From tech tutorials to industry trends and personal reflections, my blog is a platform where I share knowledge and engage with the community.</p>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry justify-content-end">
                                    <a href="single.html" className="block-20" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
                                    </a>
                                    <div className="text mt-3 float-right d-block">
                                        <div className="d-flex align-items-center mb-3 meta">
                                            <p className="mb-0">
                                                <span className="mr-2">June 21, 2019</span>
                                                <a href="#" className="mr-2">Admin</a>
                                                <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                        <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry justify-content-end">
                                    <a href="single.html" className="block-20" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
                                    </a>
                                    <div className="text mt-3 float-right d-block">
                                        <div className="d-flex align-items-center mb-3 meta">
                                            <p className="mb-0">
                                                <span className="mr-2">June 21, 2019</span>
                                                <a href="#" className="mr-2">Admin</a>
                                                <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                        <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate">
                                <div className="blog-entry">
                                    <a href="single.html" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                                    </a>
                                    <div className="text mt-3 float-right d-block">
                                        <div className="d-flex align-items-center mb-3 meta">
                                            <p className="mb-0">
                                                <span className="mr-2">June 21, 2019</span>
                                                <a href="#" className="mr-2">Admin</a>
                                                <a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a>
                                            </p>
                                        </div>
                                        <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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

export default Blogs;
