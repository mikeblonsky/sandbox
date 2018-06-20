import React, { Component } from "react";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			"users": [],
			"posts": [],
			"comments": [],
			"photos": []
		}
	}
	componentWillMount() {
		this.props.fetchUsers({"number": 10, gender: "female", nat: "ES"});
		this.props.fetchPosts();
		this.props.fetchComments();
		this.props.fetchPhotos();
	}
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps", nextProps, nextProps.user && nextProps.user);
		this.setState({
			"users": nextProps.users,
			"posts": nextProps.posts,
			"comments": nextProps.comments,
			"photos": nextProps.photos
		});
	}
	render() {

		const {
			users,
			posts,
			comments,
			photos
		} = this.state;

		return (
			<div className="main__container">
				<div className="column">
					<h2>USERS</h2>
					<ol>
						{ users && users.map((user, index) => <li key={index}>user email: { user.email }</li>) }
					</ol>
				</div>
				<div className="column">
					<h2>POSTS</h2>
					<ol>
						{ posts && posts.slice(0, 50).map((post, index) => <li key={index}>post title: { post.title }</li>) }
					</ol>
				</div>
				<div className="column">
					<h2>COMMENTS</h2>
					<ol>
						{ comments && comments.slice(0, 50).map((comment, index) => <li key={index}>comment name: { comment.name }</li>) }
					</ol>
				</div>
				<div className="column">
					<h2>PHOTOS</h2>
					<ol>
						{ photos && photos.slice(0, 10).map((photo, index) => <li key={index}><p>photo title: { photo.title }</p> <img src={photo.thumbnailUrl} /></li>) }
					</ol>
				</div>
			</div>
		);
	}
}

