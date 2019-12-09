import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../main/component/Home";
import About from "../main/component/About";
import Services from "../main/component/Services";
import Partners from "../main/component/Partners";
import Career from "./component/Career";
import Blog from "./component/Blog";
import Industries from "./component/Industries";

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/industries" component={Industries} />
                <Route path="/about" component={About} />
                <Route path="/careers" component={Career} />
                <Route path="/partners" component={Partners} />
                <Route path="/blog" component={Blog} />
            </Switch>
        )
    }
}

export default Main;

