import React from "react";
import Testimonial from "./Testimonial";
import Contact from "../component/Contact";

class Services extends React.Component {
    // componentDidMount() {
    //     // Get a reference to the <path>
    //     var path = document.querySelector('#line_path');

    //     // Get length of path... ~577px in this case
    //     var pathLength = path.getTotalLength();

    //     console.log(pathLength, "pathlen");

    //     // Make very long dashes (the length of the path itself)
    //     path.style.strokeDasharray = pathLength + ' ' + pathLength;

    //     // Offset the dashes so the it appears hidden entirely
    //     path.style.strokeDashoffset = pathLength;

    //     path.getBoundingClientRect();

    //     // When the page scrolls...
    //     window.addEventListener("scroll", function (e) {
    //         var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //         console.log(document.body.scrollTop);

    //         // Length to offset the dashes
    //         var drawLength = pathLength * scrollPercentage;

    //         console.log(drawLength);

    //         // Draw in reverse
    //         path.style.strokeDashoffset = pathLength - drawLength;

    //         // When complete, remove the dash array, otherwise shape isn't quite sharp
    //         // Accounts for fuzzy math
    //         if (scrollPercentage >= 0.75) {
    //             path.style.strokeDasharray = "none";
    //         } else {
    //             path.style.strokeDasharray = pathLength + ' ' + pathLength;
    //         }
    //     });
    // }

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
                    <div className="container">
                        <div className="svg_element_container" id="svg_section">
                            <svg id="line_svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1500" width="100%" height="1500px">
                                <path
                                    id="line_path"
                                    className="svg_line"
                                    d="M862.000,-2.000 L862.000,224.000 L297.000,224.000 L297.000,563.000 L1596.500,563.000 L1596.500,902.000 L297.000,902.000 L297.000,1241.000 L1596.500,1241.000 L1596.500,1495.250" />
                            </svg>
                        </div>


                        <div className="d-flex align-items-center mt-4 mb-4">
                            <div className="card service_1">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-3 text-center">
                                        <img src="http://via.placeholder.com/150x150/ccc" className="rounded" alt="text" />
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
                        <div className="d-flex align-items-center mt-4 mb-4">
                            <div className="card service_2">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">TIME SAVINGS</h5>
                                            <p className="card-text">We locate the roles and process which are the obstacles stopping your business from reducing Turn-Around-Time, increasing quality of deliverables and reducing operational expenses.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <img src="http://via.placeholder.com/150x150/ccc" className="rounded" alt="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4 mb-4">
                            <div className="card service_3">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-3 text-center">
                                        <img src="http://via.placeholder.com/150x150/ccc" className="rounded" alt="text" />
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
                        <div className="d-flex align-items-center mt-4 mb-4">
                            <div className="card service_4">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">SCALING GROWTH</h5>
                                            <p className="card-text">We deploy automations and learning agents in place that work seamlessly with your workforce and processes without the need to change their behavior in order to achieve business results.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <img src="http://via.placeholder.com/150x150/ccc" className="rounded" alt="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 mb-5 text-center">
                                <h2 className="title">Here's what our clients had to say!</h2>
                            </div>
                        </div>
                    </div>
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