import React, { Component } from "react";
// actions

export default class App extends Component {
	componentWillMount() {
		this.props.fetchUsers({"number": 10, gender: "female", nat: "ES"});
		this.props.fetchPosts();
		this.props.fetchComments();
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps", nextProps, nextProps.user && nextProps.user);
	}
	render() {
		return (
			<div className="main-app-container">

			</div>
		);
	}
}

