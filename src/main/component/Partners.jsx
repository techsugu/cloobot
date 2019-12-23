import React from "react";
import Contact from "./Contact";
import Logo from "../../images/logo@2x.svg";

class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <React.Fragment>
                <section className="pro-partners d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 text-center">
                                <img src={Logo} alt="logo" className="img-fluid" />
                                <h2 className="title">Partners Programs</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-part-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 text-center">
                                <p className="pro-descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius nulla ut hendrerit. Morbi vitae mauris ipsum. Vestibulum neque sapien, auctor viverra orci vel, vestibulum lobortis lectus. Nam elementum, urna in fringilla laoreet, justo nibh aliquet orci, at cursus nulla nisi ac elit. Etiam luctus, dolor at cursus tempus, ligula nulla volutpat tortor,</p>
                                <button type="button" className="btn btn-primary pro_btn">Leave us a Message</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-partners-opt d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12">
                                <h2 className="title">Partnership Opportunities</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card">
                                    <img className="card-img-top" src="../../images/Partners/solutions.svg" alt="Solutions" />
                                    <div className="card-body">
                                        <h4 className="card-title">Solution Partner</h4>
                                        <p className="card-text">Leverage your technical and sales capabilities to consult, sell, customize and implement Freshworks products for businesses globally.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card">
                                    <img className="card-img-top" src="../../images/Partners/isv.svg" alt="isv" />
                                    <div className="card-body">
                                        <h4 className="card-title">ISV Partner</h4>
                                        <p className="card-text">Leverage your technical and sales capabilities to consult, sell, customize and implement Freshworks products for businesses globally.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card">
                                    <img className="card-img-top" src="../../images/Partners/affiliate.svg" alt="Affliate" />
                                    <div className="card-body">
                                        <h4 className="card-title">Affiliate Partner</h4>
                                        <p className="card-text">Leverage your technical and sales capabilities to consult, sell, customize and implement Freshworks products for businesses globally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-ourpartners d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 text-center">
                                <h2 className="title">Our Partners</h2>
                                <p className="pro-descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum varius nulla ut hendrerit. Morbi vitae mauris ipsum. Vestibulum neque sapien, auctor viverra orci vel, vestibulum lobortis lectus. Nam elementum, urna in fringilla laoreet, justo nibh aliquet orci, at cursus nulla nisi ac elit. Etiam luctus, dolor at cursus tempus, ligula nulla volutpat tortor,</p>
                                <img src="../../images/Partners/group_partners.png" className="img-fluid" alt="group_partners" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-partners-contact">
                    <Contact />
                </section>
            </React.Fragment>
        )
    }
}

export default Partners;