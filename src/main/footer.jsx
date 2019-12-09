import React from "react";
import { Link } from "react-router-dom";
import Footer_Logo from "../images/footer_logo.svg";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
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
            <footer className="pro-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-12">
                            <div className="menus">
                                <h4>Cloobot</h4>
                                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/use-cases">Use Cases</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-12">
                            <div className="menus">
                                <h4>Community</h4>
                                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-12">
                            <div className="menus">
                                <h4>Legal</h4>
                                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                    <li className="nav-item"><Link className="nav-link" to="/blog">Sitemap</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/careers">Trademark</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-12">
                            <img src={Footer_Logo} className="img-fluid" alt="Footer Logo" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <ul className="social">
                            <li className="social_icons"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li className="social_icons"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                            <li className="social_icons"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                        </ul>
                        <div className="copy-right">
                            <p>Built by Lara Media for Cloobot Techlabs © 2019. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;