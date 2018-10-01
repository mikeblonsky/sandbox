import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// react widgets zainstalowac

// Containers
import ApiFree from "./ApiFree/apiFree";
import RegisterForm from "./Register/registerForm";
import Home from "./Home/Home";


class MainApp extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Router>
                <div className="mainTemplate">
                    <Route path="/" exact component={Home} />
                    <Route path="/api" exact component={ApiFree} />
                    <Route path="/register" exact component={RegisterForm} />
                </div>
            </Router>            
        );
    }
}

export default MainApp;