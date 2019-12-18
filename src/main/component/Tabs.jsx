import React from "react";
import AliceCarousel from 'react-alice-carousel'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideNav: null
        };
    }

    responsive = {
        0: { items: 1 }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({
            hideNav: window.innerWidth <= 768
        });
    }

    render() {
        return (
            <div className="flex-row d-flex justify-content-center w-100">
                {(!this.state.hideNav) ?
                    <React.Fragment>
                        <div className="col-lg-3 col-xl-3 pt-5 mt-lg-5">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><div className="tab-title"> Sales <span className="tab-subtitle">Operations</span></div></a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><div className="tab-title"> Human <span className="tab-subtitle">Resources</span></div></a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><div className="tab-title"> Logistics</div></a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><div className="tab-title"> Procurement</div></a>
                                <a className="nav-link" id="v-pills-engineering-tab" data-toggle="pill" href="#v-pills-engineering" role="tab" aria-controls="v-pills-engineering" aria-selected="false"><div className="tab-title"> Engineering <span className="tab-subtitle">&</span> Design</div></a>
                                <a className="nav-link" id="v-pills-Processing-tab" data-toggle="pill" href="#v-pills-Processing" role="tab" aria-controls="v-pills-Processing" aria-selected="false"><div className="tab-title"> Business <span className="tab-subtitle">Processing</span> Services</div></a>
                                <a className="nav-link" id="v-pills-Operations-tab" data-toggle="pill" href="#v-pills-Operations" role="tab" aria-controls="v-pills-Operations" aria-selected="false"><div className="tab-title"> Business <span className="tab-subtitle">Operations</span></div></a>
                            </div>
                            <div className="view">
                                <button className="btn btn-default pro-btn">Let us show you how
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-xl-9 bg-light p-0">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus1.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus2.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus3.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div></div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus4.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-engineering" role="tabpanel" aria-labelledby="v-pills-engineering-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus5.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Processing" role="tabpanel" aria-labelledby="v-pills-Processing-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus6.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Operations" role="tabpanel" aria-labelledby="v-pills-Operations-tab">
                                    <div className="wrap">
                                        <img src="../../images/Home/focus7.png" className="img-fluid tab-image" alt="Tab_image" />
                                        <div className="tab-inner-content">
                                            <p className="sub_title">You Can</p>
                                            <h3 className="title">Focus on your team.</h3>
                                        </div>
                                        <div className="wrap-inner">
                                            <div className="tab-card">
                                                <p className="sub_title">We will,</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                            <div className="tab-card">
                                                <p className="sub_title">You Can</p>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                                    <li className="list-group-item">Enhance human resource efficiency.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment> :
                    <React.Fragment>
                        <AliceCarousel
                            responsive={this.responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlayInterval={3000}
                            autoPlayDirection="rtl"
                            buttonsDisabled={true}
                            dotsDisabled={false}
                            stagePadding={this.stagePadding} >
                            <div className="item">
                                <div className="mobile_wrap">
                                    <img src="../../images/Home/focus1.png" className="img-fluid tab-image" alt="Tab_image" />
                                    <div className="tab-inner-content">
                                        <p className="sub_title">You Can</p>
                                        <h3 className="title">Focus on your team.</h3>
                                    </div>
                                    <div className="tab-card">
                                        <p className="sub_title">We will,</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                        <p className="sub_title">You Can</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile_wrap">
                                    <img src="../../images/Home/focus2.png" className="img-fluid tab-image" alt="Tab_image" />
                                    <div className="tab-inner-content">
                                        <p className="sub_title">You Can</p>
                                        <h3 className="title">Focus on your team.</h3>
                                    </div>
                                    <div className="tab-card">
                                        <p className="sub_title">We will,</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                        <p className="sub_title">You Can</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile_wrap">
                                    <img src="../../images/Home/focus3.png" className="img-fluid tab-image" alt="Tab_image" />
                                    <div className="tab-inner-content">
                                        <p className="sub_title">You Can</p>
                                        <h3 className="title">Focus on your team.</h3>
                                    </div>
                                    <div className="tab-card">
                                        <p className="sub_title">We will,</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                        <p className="sub_title">You Can</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile_wrap">
                                    <img src="../../images/Home/focus4.png" className="img-fluid tab-image" alt="Tab_image" />
                                    <div className="tab-inner-content">
                                        <p className="sub_title">You Can</p>
                                        <h3 className="title">Focus on your team.</h3>
                                    </div>
                                    <div className="tab-card">
                                        <p className="sub_title">We will,</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>

                                        </ul>
                                        <p className="sub_title">You Can</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile_wrap">
                                    <img src="../../images/Home/focus5.png" className="img-fluid tab-image" alt="Tab_image" />
                                    <div className="tab-inner-content">
                                        <p className="sub_title">You Can</p>
                                        <h3 className="title">Focus on your team.</h3>
                                    </div>
                                    <div className="tab-card">
                                        <p className="sub_title">We will,</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>

                                        </ul>
                                        <p className="sub_title">You Can</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">Gain a better hold on the payroll process.</li>
                                            <li className="list-group-item">Enhance human resource efficiency.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AliceCarousel>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Tabs;