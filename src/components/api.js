import React, { Component } from "react";
import { Field } from "redux-form";

class Api extends Component {
	constructor() {
		super();
		this.state = {
			"users": [],
			"posts": [],
			"comments": [],
			"photos": [],
			"persons": [],
			"reqres": [],
			"pokemon": []
		}
	}
	componentWillMount() {
		this.props.fetchUsers({"number": 20, gender: "female", nat: "ES"});
		this.props.fetchPosts();
		this.props.fetchComments();
		this.props.fetchPhotos();
		this.props.fetchPersons();
		this.props.fetchReqres();
		this.props.fetchPokemon();
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			"users": nextProps.users,
			"posts": nextProps.posts,
			"comments": nextProps.comments,
			"photos": nextProps.photos,
			"persons": nextProps.persons,
			"reqres": nextProps.reqres,
			"pokemon": nextProps.pokemon
		});
	}

	render() {
		const {
			users,
			posts,
			comments,
			photos,
			persons,
			reqres,
			pokemon
		} = this.state;
		console.log(this.props);
		return (
			<div className="main__container">
				<div className="column">
					<h2>POKEMON</h2>
					<ol>
						{ pokemon && pokemon.map((pokemonItem, index) => 
							<li key={index}><a href={ pokemonItem.url }>{ pokemonItem.name }</a></li>
						).slice(0, 20)}
					</ol>
				</div>
				<div className="column">
					<h2>REQRES</h2>
					<ol className="reqresList">
						{ reqres && reqres.map((item, index) => <li key={index}>item name: { item.first_name }<br /><img src={item.avatar} /></li>) }
					</ol>
				</div>
				<div className="column">
					<h2>PERSONS</h2>
					<ol>
						{ persons && persons.map((person, index) => <li key={index}>person name: { person.name }</li>) }
					</ol>
				</div>
				<div className="column">
					<h2>USERS</h2>
					<ol className="usersList">
						{ users && users.map((user, index) => <li key={index}>user email: { user.email }</li>) }
					</ol>
				</div>
				<div className="column">
					<h2>POSTS</h2>
					<ol className="postsList">
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

export default Api;
