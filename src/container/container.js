import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUsers, fetchPosts, fetchComments, fetchPhotos } from "../actions/actions_index";
import App from "../components/app";

let App1 = (props) => <App {...props}/>;

function mapStateToProps(state){
    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments,
        photos: state.photos
    };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
        fetchUsers,
        fetchPosts,
        fetchComments,
        fetchPhotos
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App1);