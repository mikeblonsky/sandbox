import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUsers, fetchPosts } from "../actions/actions_index";
import App from "../components/app";

let App1 = (props) => <App {...props}/>;

function mapStateToProps(state){
    return {
        users: state.users,
        posts: state.posts
    };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
        fetchUsers,
        fetchPosts
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App1);