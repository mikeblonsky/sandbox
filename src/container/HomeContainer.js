import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";
import { xxx } from "../actions/actions_index";

const HomeContainer = props => <Home {...props} />;

function mapStateToProps(state) {
    let { sports } = state;
    return { sports };
}

function mapDispatchToProps(dispatch) { 
    return bindActionCreators(
        { 
            xxx 
        }, 
        dispatch
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
