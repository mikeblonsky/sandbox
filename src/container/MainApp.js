import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Containers
import ApiFree from "./ApiFree/apiFree";
import RegisterContainer from "./RegisterContainer";
import HomeContainer from "./HomeContainer";
import LoginContainer from "./LoginContainer";

class MainApp extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div className="mainTemplate">
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/register" exact component={RegisterContainer} />
                    <Route path="/login" exact component={LoginContainer} />
                    {/* <Route path="/user/profile/:userName" exact component={UserProfileContainer} />
                    <Route path="/user/panel/:userName" exact component={UserPanelContainer} /> */}
                    
                    <Route path="/api" exact component={ApiFree} />
                </div>
            </Router>
        );
    }
}

export default MainApp;