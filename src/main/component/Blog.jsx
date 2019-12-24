import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Contact from "../component/Contact";
import post_data from "../Json/post.json";
import news_data from "../Json/tech_news.json";
import Logo from "../../images/logo@2x.svg";


class RecentPost extends React.Component {
    responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    }
    render() {
        return (
            <div className="recent_blog_slide" >
                <AliceCarousel
                    responsive={this.responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlayInterval={3000}
                    autoPlayDirection="rtl"
                    buttonsDisabled={true}
                    dotsDisabled={false}
                    mouseDragEnabled={true}
                    touchTrackingEnabled={true}
                    stagePadding={this.stagePadding} >
                    <div className="item">
                        <div className="card">
                            <img className="card-img" alt="text" src="../../images/Blog/customisations@2x.png" />
                            <div className="card-body">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text"> when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <button className="btn btn-light btn-read"> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img className="card-img" alt="text" src="../../images/Blog/customisations@2x.png" />
                            <div className="card-body">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text"> when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <button className="btn btn-light btn-read"> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img className="card-img" alt="text" src="../../images/Blog/customisations@2x.png" />
                            <div className="card-body">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text">when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <button className="btn btn-light btn-read"> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img className="card-img" alt="text" src="../../images/Blog/customisations@2x.png" />
                            <div className="card-body">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text">when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <button className="btn btn-light btn-read"> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img className="card-img" alt="text" src="../../images/Blog/customisations@2x.png" />
                            <div className="card-body">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text">when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <button className="btn btn-light btn-read"> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </AliceCarousel>
            </div>
        )
    }

}

class Bottom extends React.Component {
    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }
    render() {
        return (
            <div className="blog_slide " >
                <AliceCarousel
                    responsive={this.responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlayInterval={3000}
                    autoPlayDirection="rtl"
                    buttonsDisabled={true}
                    dotsDisabled={false}
                    mouseDragEnabled={true}
                    touchTrackingEnabled={true}
                    stagePadding={this.stagePadding} >
                    <div className="item">
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url('../../images/Blog/blog_bg.png')" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Change your workflow</h5>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url('../../images/Blog/blog_bg.png')" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Change your workflow</h5>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url('../../images/Blog/blog_bg.png')" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Change your workflow</h5>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url('../../images/Blog/blog_bg.png')" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Change your workflow</h5>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card">
                            <div className="card-img" style={{ backgroundImage: "url('../../images/Blog/blog_bg.png')" }} />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Change your workflow</h5>
                            </div>
                        </div>
                    </div>
                </AliceCarousel>
            </div>
        )
    }

}

class SmallBlog extends React.Component {
    render() {
        return (
            <div className="small_blog">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card-horizontal d-flex align-items-center">
                            <div className="img-square-wrapper">
                                <img src="../../images/Blog/headway-5QgIuuBxKwM-unsplash.png" className="rounded" alt="Blog_Image" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Post Title</h4>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="card-horizontal d-flex align-items-center">
                            <div className="img-square-wrapper">
                                <img src="../../images/Blog/headway-5QgIuuBxKwM-unsplash.png" className="rounded" alt="Blog_Image" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Post Title</h4>
                                <p className="card-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card small_card">
                            <img className="card-img" alt="text" src="../../images/Blog/multipleorgs.png" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text">
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="card small_card">
                            <img className="card-img" alt="text" src="../../images/Blog/multipleorgs.png" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Post Title</h5>
                                <p className="card-text">
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class LatestNews extends React.Component {
    render() {
        let latestnews_data = [];
        this.props.news_data.forEach((res, i) => {
            latestnews_data.push(
                <div className="p-0" key={res.id}>
                    <div className="card shadow">
                        <div className={(res.type === "horizontal") ? "card-horizontal d-flex align-items-center" : "card-vertical d-flex align-items-center"}>
                            <div className="img-square-wrapper">
                                <img src={res.img_url} className={(res.type === "horizontal") ? "rounded" : "img-fluid rounded"} alt="Blog_Image" />
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">{res.tag_name}</h6>
                                <h4 className="card-title">{res.title}</h4>
                                <p className="card-text">{this.props.shortCharacter(res.body, "latest_news")}</p>
                                <button className="btn btn-light btn-read" onClick={e => this.props.handleReadMore(e, res.id, "latest_news")}> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="news_wrap">
                {latestnews_data}
            </div>
        )
    }
}

class Fullblog extends React.Component {
    render() {
        let read_body = [];
        let latest_news = this.props.news_data;
        let blog_data = this.props.data;
        (this.props.blogSection === "latest_news" ? latest_news : blog_data).forEach((ele, i) => {
            if (parseInt(this.props.show_id) === ele.id) {
                read_body.push(
                    <div key={i} className="card">
                        <div className="card-img" style={{ backgroundImage: "url(" + ele.img_url + ")" }}>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <p className="card-text">{ele.body}</p>
                        </div>
                    </div>
                );
            }
        });

        return (
            <div className="full_post">
                <div className="col-lg-12 col-sm-12">
                    <div className="post_top">{read_body}</div>
                    <div className="post_btns">
                        <button className="btn btn-primary pro-btn btn-back"
                            onClick={e => this.props.backToLogs(e)}> <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            Back </button>
                        <button className="btn btn-primary pro-btn btn-back"
                            onClick={e => this.props.backToLogs(e)}>Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: post_data,
            news_data: news_data,
            show_id: "",
            show: false,
            blogSection: null
        };
        this.handleReadMore = this.handleReadMore.bind(this);
        this.backToLogs = this.backToLogs.bind(this);
    }

    handleReadMore(e, id, option) {
        this.setState({
            blogSection: option,
            show_id: id,
            show: true
        });
    }
    backToLogs(e) {
        this.setState({
            show: false
        })
    }

    shortCharacter(text, option) {
        let value = text;
        let limit = ""
        if (value.length) {
            if (option === "blog") {
                limit = parseInt("150");
            } else if (option === "latest_news") {
                limit = parseInt("75");
            }
            value = value.length > limit ? value.substring(0, limit) + "..." : value;
        }
        return value;
    }

    render() {
        let blog_data = [];
        this.state.data.forEach((res, i) => {
            blog_data.push(
                <div className={res.auto_width ? res.auto_width : "col-lg-4 col-xl-4 col-sm-12"} key={res.id}>
                    <div className="card">
                        <div className={(res.type === "horizontal") ? "card-horizontal" : "card-vertical"}>
                            <div className="img-square-wrapper">
                                <img src={res.img_url} className={(res.type === "horizontal") ? "rounded" : "img-fluid rounded"} alt="Blog_Image" />
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2">{res.tag_name}</h6>
                                <h4 className="card-title">{res.title}</h4>
                                <p className="card-text">{this.shortCharacter(res.body, "blog")}</p>
                                <button className="btn btn-light btn-read" onClick={e => this.handleReadMore(e, res.id, "blog")}> Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                <section className="pro-blog">
                    <div className="container">
                        <div className="inner-blog">
                            <div className="row mt-5 pt-5">
                                <div className="col-xl-6 col-lg-6 col-sm-12">
                                    <h2 className="display-3">BLOG</h2>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
                                    <img src={Logo} alt="logo" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pro-blog_list">
                    {this.state.show ?
                        <React.Fragment>
                            <div className="container">
                                <div className="row">
                                    <Fullblog
                                        show_id={this.state.show_id}
                                        backToLogs={this.backToLogs}
                                        data={this.state.data}
                                        news_data={this.state.news_data}
                                        blogSection={this.state.blogSection}
                                    />
                                </div>
                            </div>
                            <div className="recent_post">
                                <div className="container">
                                    <div className="row no-gutters">
                                        <div className="col-lg-12 col-sm-12">
                                            <h3 className="post_title">
                                                Recent Posts
                                            </h3>
                                            <RecentPost />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="container">
                                <div className="pro-blog-inner">
                                    <div className="row">
                                        {blog_data}
                                    </div>
                                </div>
                                <div className="pro-blog-news">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <Bottom />
                                            <SmallBlog />
                                        </div>
                                        <div className="col-lg-4">
                                            <h4 className="news-title">Latest News</h4>
                                            <LatestNews
                                                news_data={this.state.news_data}
                                                shortCharacter={this.shortCharacter}
                                                handleReadMore={this.handleReadMore}

                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>}
                </section>
                <section className="pro-blog-contact">
                    <Contact />
                </section>
            </React.Fragment>
        )
    }
}
export default Blog;