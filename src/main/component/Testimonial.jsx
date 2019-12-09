import React from "react";

class Testimonial extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-7 col-sm-12">
                        <div id="testimonial" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card">
                                        <div className="no-gutters d-flex align-items-center">
                                            <div className="col-lg-5 col-sm-12">
                                                <img src="../../images/Home/testimonial.png" className="img-fluid testimonial-img" alt="" />
                                            </div>
                                            <div className="col-lg-7 col-sm-12">
                                                <div className="card-block">
                                                    <h4 className="card-title">Hikari Bana</h4>
                                                    <small className="text-muted">Shed Enterprises</small>
                                                    <p className="card-text">The Encompass services have changed our entire business approach!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card">
                                        <div className="no-gutters d-flex align-items-center">
                                            <div className="col-lg-5 col-sm-12">
                                                <img src="../../images/Home/testimonial.png" className="img-fluid testimonial-img" alt="" />
                                            </div>
                                            <div className="col-lg-7 col-sm-12">
                                                <div className="card-block">
                                                    <h4 className="card-title">Hikari Bana</h4>
                                                    <small className="text-muted">Shed Enterprises</small>
                                                    <p className="card-text">The Encompass services have changed our entire business approach!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card">
                                        <div className="no-gutters d-flex align-items-center">
                                            <div className="col-lg-5 col-sm-12">
                                                <img src="../../images/Home/testimonial.png" className="img-fluid testimonial-img" alt="" />
                                            </div>
                                            <div className="col-lg-7 col-sm-12">
                                                <div className="card-block">
                                                    <h4 className="card-title">Hikari Bana</h4>
                                                    <small className="text-muted">Shed Enterprises</small>
                                                    <p className="card-text">The Encompass services have changed our entire business approach!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="carousel-indicators">
                                <li data-target="#testimonial" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonial" data-slide-to="1"></li>
                                <li data-target="#testimonial" data-slide-to="2"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;