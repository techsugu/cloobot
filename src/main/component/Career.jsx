import React from "react";
import 'aos/dist/aos.css';

import Contact from "../component/Contact";
import job_data from "../Json/joblist.json";

import Logo from "../../images/logo@2x.svg";

class JobList extends React.Component {
    render() {
        let jobs = [];
        this.props.data.forEach((element, i) => {
            jobs.push(
                <React.Fragment key={i} >
                    <div className="list">
                        <div className="job_title">{element.job_title}</div>
                        <div className="job_location text-center">{element.job_location}</div>
                        <div className="apply text-center">
                            <span id={i} className="btn btn-light pro-read-more" onClick={(e) => this.props.handleReadMore(e, i)}>Read</span>
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
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Enter Your Name" name="name" />
                                            </div>
                                            <div className="row m-0">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Enter email" name="email" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Enter Your Phone" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                            </div>
                                            <button className="btn btn-light pro-apply d-flex mt-4 mx-auto">Apply</button>
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
            data: job_data
        };

        this.handleReadMore = this.handleReadMore.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.myRef = React.createRef();
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
                        data={this.state.data} />
                </section>
                <Contact />
            </React.Fragment>
        )
    }
}

export default Career;