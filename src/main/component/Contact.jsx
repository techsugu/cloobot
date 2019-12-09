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
                        <div className="col-xl-6 col-lg-6 col-sm-12 p-lg-5">
                            <form className="card contact-left">
                                <div className="card-body">
                                    <h5 className="card-title">Contact Us</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email" onChange={e => this.handleChange(e)} />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={e => this.handleChange(e)} />
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control" name="message" id="message" placeholder="Message" rows="3" onChange={e => this.handleChange(e)} />
                                    </div>
                                    <button className="btn btn-default pro-btn" onClick={e => this.handleSubmit(e)}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 align-self-center p-lg-5">
                            <div className="card address">
                                <div className="card-body">
                                    <h5 className="card-title">America</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card address ">
                                <div className="card-body">
                                    <h5 className="card-title">United State</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;