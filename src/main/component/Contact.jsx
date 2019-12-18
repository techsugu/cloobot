import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="pro-contact d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-sm-12 align-self-center">
                            <div className="card address">
                                <div className="card-body">
                                    <h5 className="card-title">Contact Us</h5>
                                    <div className="card-subtitle">
                                        <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        <span>info@cloobot.com</span>
                                    </div>
                                    <div className="card-subtitle">
                                        <span className="icon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                        <span>+998 254 3654</span>
                                    </div>
                                    <div className="card-subtitle">
                                        <span className="icon"><i className="fa fa-mobile" aria-hidden="true"></i></span>
                                        <span>+998 254 3654</span>
                                    </div>
                                    <div className="card-address">
                                        <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                        <span className="text">Cloobot TechLabs <br /> Cheyenne 30 N Gould St, <br /> STE 4000 Sheridan, Wyoming</span>
                                    </div>
                                    <div className="view_map">
                                        <button className="btn btn-default pro-btn pro-map">View map</button>
                                    </div>
                                    <div className="social_views">
                                        <h5 className="title">Find Us:</h5>
                                        <ul className="social row no-gutters">
                                            <li className="social_icons"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                            <li className="social_icons"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                            <li className="social_icons"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-sm-12 p-lg-3 light">
                            <form className="card contact-right">
                                <div className="card-body">
                                    <h5 className="card-title">leave us message</h5>
                                    <p className="card-text">Schedule a call to learn about what the Encompass platform can do for your business.</p>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" onChange={e => this.handleChange(e)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last Name" onChange={e => this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={e => this.handleChange(e)} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="phone" className="form-control" name="phone" id="phone" placeholder="Phone" onChange={e => this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={e => this.handleChange(e)} />
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" placeholder="Message" rows="3" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <button className="btn btn-default pro-btn pro-send" onClick={e => this.handleSubmit(e)}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;