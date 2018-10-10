import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Login from "../components/Login";
import { xxx } from "../actions/actions_index";

const LoginContainer = props => <Login {...props} />;

function mapStateToProps(state) {
    return { 
        sports: state.sports 
    };
}

function mapDispatchToProps(dispatch) { 
    return bindActionCreators(
        { 
            xxx 
        }, 
        dispatch
    );
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginContainer);
