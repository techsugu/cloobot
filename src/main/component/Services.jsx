import React from "react";
import Particle from "../component/Particlebg";
import Testimonial from "./Testimonial";
import Contact from "../component/Contact";

class Services extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="pro-services d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-service-left"></div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12">
                                <div className="pro-service-right">
                                    <h4 className="pro-service-title">Our Services</h4>
                                    <p className="pro-service-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius nulla ut hendrerit. Morbi vitae mauris ipsum. Vestibulum neque sapien, auctor viverra orci vel, vestibulum lobortis lectus. Nam elementum, urna in fringilla laoreet, justo nibh aliquet orci, at cursus nulla nisi ac elit. Etiam luctus, dolor at cursus tempus, ligula nulla volutpat tortor,</p>
                                </div>
                                <span className="hidden-xs hidden-sm round-circle"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-service-list" id="service_list">
                    <div className="particle_js" id="particle_js"><Particle /></div>
                    <div className="container">
                        <div className="d-flex align-items-center mt-lg-4 mb-lg-4">
                            <div className="card service_1">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-3 text-center">
                                        <div className="service_img" data-aos="slide-up" data-aos-duration="800">
                                            <img src="../../images/Services/service1.svg" className="img-fluid cust_img" alt="service" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">MAPPING</h5>
                                            <p className="card-text">We map your business’s workflow using our proprietary arsenal of process analysis tools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-lg-4 mb-lg-4">
                            <div className="card service_2">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">TIME SAVINGS</h5>
                                            <p className="card-text">We locate the roles and process which are the obstacles stopping your business from reducing Turn-Around-Time, increasing quality of deliverables and reducing operational expenses.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="service_img" data-aos="slide-down" data-aos-duration="800">
                                            <img src="../../images/Services/service2.svg" className="img-fluid cust_img" alt="service" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-lg-4 mb-lg-4">
                            <div className="card service_3">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-3 text-center">
                                        <div className="service_img" data-aos="slide-up" data-aos-duration="800">
                                            <img src="../../images/Services/service3.svg" className="img-fluid cust_img" alt="service" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">AUTOMATION</h5>
                                            <p className="card-text">We deploy automations and learning agents in place that work seamlessly with your workforce and processes without the need to change their behavior in order to achieve business results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-lg-4 mb-lg-4">
                            <div className="card service_4">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">SCALING GROWTH</h5>
                                            <p className="card-text">We deploy automations and learning agents in place that work seamlessly with your workforce and processes without the need to change their behavior in order to achieve business results.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="service_img" data-aos="slide-down" data-aos-duration="800">
                                            <img src="../../images/Services/service4.svg" className="img-fluid cust_img" alt="service" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-testimonial d-flex align-items-center">
                    <Testimonial />
                </div>
                <div className="pro-service-con">
                    <Contact />
                </div>
            </React.Fragment>
        )
    }
}

export default Services;