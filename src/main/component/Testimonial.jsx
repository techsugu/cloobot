import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class Testimonial extends React.Component {
    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }
    render() {
        return (
            <div className="container">
                <div className="row d-flex align-items-center">
                    <h2 className="title">{"Here's what our clients had to say!"}</h2>
                    <div className="mx-auto col-lg-7 col-sm-12">
                        <AliceCarousel
                            responsive={this.responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlayInterval={3000}
                            autoPlayDirection="rtl"
                            buttonsDisabled={true}
                            dotsDisabled={false}
                            mouseDragEnabled={true}
                            touchTrackingEnabled={true}
                            stagePadding={this.stagePadding} >
                            <div className="item">
                                <div className="card">
                                    <div className="no-gutters d-flex align-items-center">
                                        <div className="col-lg-5 col-sm-12">
                                            <img src="../../images/Home/testimonial1.png" className="img-fluid testimonial-img" alt="" />
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
                            <div className="item">
                                <div className="card">
                                    <div className="no-gutters d-flex align-items-center">
                                        <div className="col-lg-5 col-sm-12">
                                            <img src="../../images/Home/testimonial2.png" className="img-fluid testimonial-img" alt="" />
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
                            <div className="item">
                                <div className="card">
                                    <div className="no-gutters d-flex align-items-center">
                                        <div className="col-lg-5 col-sm-12">
                                            <img src="../../images/Home/testimonial3.png" className="img-fluid testimonial-img" alt="" />
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
                        </AliceCarousel>
                    </div>
                </div>
            </div>

        )
    }
}

export default Testimonial;