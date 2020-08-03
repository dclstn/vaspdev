import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./roots/Home.js";
import About from "./roots/About.js";
import Spec from "./roots/Spec.js";

const Root = () => {
    return (
        <div>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={About} path="/About" />
                <Route component={Spec} path="/Spec" />
            </Switch>
        </div>
    )
}

export default Root;