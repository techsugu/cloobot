import React from "react";
import $ from "jquery";
import Particle from "./Particlebg";
import Tabs from "./Tabs";
import Image from "../../images/allIsometria.svg";
import Image2 from "../../images/security.png";
import Image3 from "../../images/business.svg";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

class Home extends React.Component {
    componentDidMount() {
        let initialSrc = "../../images/Home/lap.png";
        let scrollSrc = "../../images/Home/laptop_bag.png";
        let isScrolling = true;

        $(window).scroll(function () {
            var value = $(this).scrollTop();
            console.log(value)
            if (value >= 100 && isScrolling) {
                $("#img").fadeOut(100, function () {
                    $("#img").fadeIn(100).attr("src", scrollSrc).animate({});
                });
                isScrolling = false;
            }
            else if (value <= 100 && !isScrolling) {
                $("#img").fadeOut(100, function () {
                    $("#img").fadeIn(100).attr("src", initialSrc);
                });
                isScrolling = true;
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="pro-home d-flex align-items-center">
                    <div className="particle_js" id="particle_js"><Particle /></div>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-left p-lg-4">
                                    <img src="../../images/Home/encompass.svg" alt="Encompass" className="img-fluid pro-home-img" />
                                    <p className="pro-home-details">Provide a Personal assistant for all your resources Enable resources to use their time efficiently Have a better visibility over your data Have a better visibility over your data</p>
                                    <button className="btn btn-primary download pro-btn">Download White Paper</button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-home-right text-center">
                                    <img src="../../images/Home/bg_circle.png" className="img-fluid circle_bg" alt="circle" />
                                    <span className="img_sec d-flex align-items-center" id="img_sec">
                                        <img src="../../images/Home/lap.png" className="img-fluid laptop" id="img" alt="laptop" />
                                    </span>
                                    <div className="home_circle">
                                        <span className="circle1">
                                            <img src="../../images/Home/circle1.png" className="img-fluid circle1_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle2">
                                            <img src="../../images/Home/circle2.png" className="img-fluid circle2_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle3">
                                            <img src="../../images/Home/circle3.png" className="img-fluid circle3_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle4">
                                            <img src="../../images/Home/circle4.png" className="img-fluid circle4_img" id="img" alt="laptop" />
                                        </span>
                                    </div>
                                    <div className="home_circle_inner">
                                        <span className="circle1_inner">
                                            <img src="../../images/Home/circle1_inner.png" className="img-fluid circle1__inner_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle2_inner">
                                            <img src="../../images/Home/circle2_inner.png" className="img-fluid circle2__inner_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle3_inner">
                                            <img src="../../images/Home/circle3_inner.png" className="img-fluid circle3__inner_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle4_inner">
                                            <img src="../../images/Home/circle4_inner.png" className="img-fluid circle4__inner_img" id="img" alt="laptop" />
                                        </span>
                                    </div>
                                    <div className="home_circle_small">
                                        <span className="circle1_small">
                                            <img src="../../images/Home/circle_small1.png" className="img-fluid circle1__small_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle2_small">
                                            <img src="../../images/Home/circle_small2.png" className="img-fluid circle2__small_img" id="img" alt="laptop" />
                                        </span>
                                        <span className="circle3_small">
                                            <img src="../../images/Home/circle_small3.png" className="img-fluid circle3__small_img" id="img" alt="laptop" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                <div className="pro-home-left p-lg-4">
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
                                <div className="pro-home-left p-lg-4">
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
                <section className="pro-testimonial d-flex align-items-center">
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