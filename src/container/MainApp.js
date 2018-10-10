import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Containers
import ApiFree from "./ApiFree/apiFree";
import RegisterFormContainer from "./Register/registerForm_container";
import HomeContainer from "./Home/Home_container.js";

class MainApp extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div className="mainTemplate">
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/api" exact component={ApiFree} />
                    <Route path="/register" exact component={RegisterFormContainer} />
                </div>
            </Router>
        );
    }
}

export default MainApp;