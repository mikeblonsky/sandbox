import React, { Component } from "react";
// actions

export default class App extends Component {
	componentWillMount() {
		this.props.fetchUsers({"number": 10, gender: "female", nat: "ES"});
		this.props.fetchPosts();
	}
	render() {
		console.log("APP RENDER111111111", this.props);
		return (
			<div className="main-app-container">

			</div>
		);
	}
}

