import React from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import Logo from "../images/logo.svg";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
        AOS.init({
            duration: 1200
        });
    }

    showMenu() {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        let custom_class = this.state.show ? "fa fa-times" : "fa fa-plus";
        return (
            <nav className="navbar fixed-top navbar-expand-lg pro-nav-background" >
                <div className="navbar-brand">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                </div>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className={custom_class} onClick={() => this.showMenu()} aria-hidden="true"></i>
                </button>
                <div className="container-fluid p-0">
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/services">Services</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/industries">Industries</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/partners">Partners</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/careers">Careers</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;