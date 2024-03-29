import React from 'react';
import Header from "./main/header";
import Main from "./main/main";
import Footer from "./main/footer";
import Particle from "../src/main/component/Particlebg";
import "../src/css/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }), 7000);
  }

  render() {
    return (
      <span>
        {this.state.loading ?
          <div className="pro">
            <Header />
            <Main />
            <Footer />
          </div> :
          <div className="loder">
            <div className="particle_js" id="particle_js"><Particle /></div>
            <img src="../../images/preloader.gif" alt="preloader" className="img-fluid" />
          </div>}
      </span>
    );
  }

}

export default App;
