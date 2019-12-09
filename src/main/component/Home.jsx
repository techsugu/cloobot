import React from "react";
import Tabs from "./Tabs";
import Image from "../../images/allIsometria.svg";
import Image2 from "../../images/security.png";
import Image3 from "../../images/business.svg";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="pro-home-1 d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-right text-center">
                                    <img src={Image} className="img-fluid rounded" alt="AllIsometric" data-aos="slide-up" data-aos-duration="800" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-left p-lg-4">
                                    <h4 className="pro-home-title">Natural language voice and text input</h4>
                                    <p className="pro-home-details">We care about data security and privacy of our users the most. We believe in a world where people have the highest authority and control over the data pertaining to their digital footprint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-home-2 d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-left">
                                    <h4 className="pro-home-title">Data security and privacy</h4>
                                    <p className="pro-home-details">We care about data security and privacy of our users the most. We believe in a world where people have the highest authority and control over the data pertaining to their digital footprint.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-right text-center">
                                    <img src={Image2} className="img-fluid rounded" alt="Security" data-aos="slide-up" data-aos-duration="800" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-home-3">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-right text-center">
                                    <img src={Image3} className="img-fluid rounded" alt="About" data-aos="slide-up" data-aos-duration="800" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-left">
                                    <h4 className="pro-home-title">Access your business through mobile</h4>
                                    <p className="pro-home-details">We care about data security and privacy of our users the most. We believe in a world where people have the highest authority and control over the data pertaining to their digital footprint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-home-4">
                    <div className="container">
                        <div className="row">
                            <h4 className="pro-home-title">Universal integration with top business tools</h4>
                            <img src="../../images/Home/customer_network.png" className="img-fluid network_img" alt="network" />
                        </div>
                    </div>
                </section>
                <section className="pro-home-5">
                    <Tabs />
                </section>
                <section className="pro-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 mb-5 text-center">
                                <h2 className="title">Here's what our clients had to say!</h2>
                            </div>
                        </div>
                    </div>
                    <Testimonial />
                </section>
                <section className="pro-home-6">
                    <Contact />
                </section>
            </React.Fragment>
        )
    }
}

export default Home;