import React from "react";
import $ from "jquery";
import 'aos/dist/aos.css';
import Contact from "../component/Contact";
import job_data from "../Json/joblist.json";

import Logo from "../../images/logo@2x.svg";

class JobList extends React.Component {
    componentDidMount() {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 800) {
                $(".item1").addClass("pos");
            } else if (scrollBottom >= 600) {
                $(".item1").removeClass("pos");
            }
        });
    }
    render() {
        let jobs = [];
        this.props.data.forEach((element, i) => {
            jobs.push(
                <React.Fragment key={i} >
                    <div className="list">
                        <div className="job_title">{element.job_title}</div>
                        <div className="job_location text-center">{element.job_location}</div>
                        <div className="job_avalilable text-center">{element.job_available}</div>
                        <div className="apply text-center">
                            <span id={i} className="btn btn-light pro-read-more pro-btn" onClick={(e) => this.props.handleReadMore(e, i)}>Read</span>
                        </div>
                    </div>
                    <React.Fragment>
                        {element.show ?
                            <div className="row mt-4 bg-gray">
                                <div className="col-lg-6 col-xl-6 col-sm-12 pr-3">
                                    <div className="job_details">
                                        <h5 className="job_responsible">Responsibilities</h5>
                                        <p className="job_requirement">{element.job_responsibilities}</p>
                                    </div>
                                    <div className="job_details">
                                        <h5 className="job_responsible">Requirements</h5>
                                        <p className="job_requirement">{element.job_requirement}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xl-6 col-sm-12 pl-3">
                                    <form>
                                        <div className="job_form">
                                            <div className="form-group">
                                                <label htmlFor="name" className="name">Name </label>
                                                <input type="text" className="form-control name" placeholder="Enter Your Name" name="name" onChange={(e) => this.props.handleChange(e, i)} value={this.props.career_data['name']} />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="email" className="email">Email </label>
                                                    <input type="text" className="form-control email" placeholder="Enter email" name="email" onChange={(e) => this.props.handleChange(e, i)} value={this.props.career_data['email']} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="phone" className="phone">Phone </label>
                                                    <input type="text" className="form-control phone" placeholder="Enter Your Phone" name="phone" onChange={(e) => this.props.handleChange(e, i)} value={this.props.career_data['phone']} />
                                                </div>
                                            </div>
                                            <div className="input-group justify-content-between">
                                                <div className="custom-file-choose">
                                                    <label htmlFor="resume" className="resume">Resume </label>
                                                    <input
                                                        type="file"
                                                        className="file-input"
                                                        name="resume"
                                                        id="customFile"
                                                        onChange={(e) => this.props.handleChange(e, i)}
                                                        value={this.props.career_data['resume']}
                                                    />
                                                    <span className="btn btn-default btn-resume">{this.props.career_data['resume'] ? this.props.filename(this.props.career_data['resume']) : "Upload"}</span>
                                                </div>
                                            </div>
                                            <button className="btn btn-light pro-btn pro-apply d-flex align-self-center" id={i} onClick={e => this.props.handleSubmit(e, i)}>Apply</button>
                                        </div>
                                    </form>
                                </div>
                            </div> : ""}
                    </React.Fragment>
                </React.Fragment>
            );

        });



        return (
            <div className="pro-jobs pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-sm-12">
                            <h2 className="pro-job-title">ENCOMPASS TEAM</h2>
                            <div className="pro-list">
                                {jobs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class Career extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: job_data,
            career_data: [{
                name: "",
                email: "",
                phone: "",
                resume: ""
            }]
        };

        this.handleReadMore = this.handleReadMore.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filename = this.filename.bind(this);
        this.myRef = React.createRef();
    }

    filename(fname) {
        let fileName = fname.split('/').pop().split('\\').pop();
        return fileName
    }

    handleChange(e, index) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState(prevState => {
            let career_data = prevState.career_data;
            career_data[name] = value
            return career_data;
        });
    }

    handleSubmit(e, id) {
        e.preventDefault();
        console.log(id);
        const data = this.state.career_data
        this.setState({
            career_data: data
        })
    }

    handleReadMore(e, id) {
        this.setState(prevState => {
            prevState.data[id]["show"] = !prevState.data[id]['show'];
            return prevState;
        });
    }

    handleClick() {
        this.refs.jobs.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <React.Fragment>
                <section className="pro-career d-flex align-items-center">
                    <div className="container">
                        <div className="inner-div row">
                            <div className="col-lg-12 col-sm-12">
                                <img src={Logo} className="img-fluid" alt="logo" />
                                <h1 className="pro-car-title">Join Our Team</h1>
                                <button className="btn btn-primary pro-btn" onClick={this.handleClick}>View Jobs</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-design-bg"></section>
                <section className="pro-scrolls">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12">
                                <div className="item1" data-aos="slide-up">
                                    <div className="card mx-auto">
                                        <div className="card-body ">
                                            <h5 className="card-title">Fast Growing Company</h5>
                                            <p className="card-text">We have carved our niche in two of the fastest growing technology spaces; Artificial Intelligence and Data Science. Ride the wave with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item2" data-aos="slide-up">
                                    <div className="card mx-auto">
                                        <div className="card-body ">
                                            <h5 className="card-title">Don't Stop Learning</h5>
                                            <p className="card-text">We have carved our niche in two of the fastest growing technology spaces; Artificial Intelligence and Data Science. Ride the wave with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item3" data-aos="slide-up">
                                    <div className="card mx-auto">
                                        <div className="card-body ">
                                            <h5 className="card-title">Cross Domain Exposure</h5>
                                            <p className="card-text">We have carved our niche in two of the fastest growing technology spaces; Artificial Intelligence and Data Science. Ride the wave with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item4" data-aos="slide-up">
                                    <div className="card mx-auto">
                                        <div className="card-body ">
                                            <h5 className="card-title">Great Colleagues</h5>
                                            <p className="card-text">We have carved our niche in two of the fastest growing technology spaces; Artificial Intelligence and Data Science. Ride the wave with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item5" data-aos="slide-up">
                                    <div className="card mx-auto">
                                        <div className="card-body ">
                                            <h5 className="card-title">Take Charge</h5>
                                            <p className="card-text">We have carved our niche in two of the fastest growing technology spaces; Artificial Intelligence and Data Science. Ride the wave with us.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section ref="jobs" className="job_section">
                    <JobList
                        show={this.state.show}
                        handleReadMore={this.handleReadMore}
                        data={this.state.data}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        filename={this.filename}
                        career_data={this.state.career_data} />
                </section>
                <Contact />
            </React.Fragment>
        )
    }
}

export default Career;