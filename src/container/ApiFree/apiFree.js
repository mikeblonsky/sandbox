import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { 
    fetchUsers,
    fetchPosts,
    fetchComments,
    fetchPhotos,
    fetchPersons,
    fetchReqres,
    fetchPokemon
} from "../../actions/actions_index";
import Api from "../../components/api";

let ApiFree = (props) => <Api {...props} />;

function mapStateToProps(state){
    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments,
        photos: state.photos,
        persons: state.persons,
        reqres: state.reqres,
        pokemon: state.pokemon,
    };
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
        fetchUsers,
        fetchPosts,
        fetchComments,
        fetchPhotos,
        fetchPersons,
        fetchReqres,
        fetchPokemon
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiFree);
