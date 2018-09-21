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
} from "../actions/actions_index";
import App from "../components/app";

const FORM_NAME = "REGISTER_FORM";
const selector = formValueSelector(FORM_NAME);
let App1 = (props) => <App {...props} />;

function mapStateToProps(state){
    const values = selector(
        state,
        "name",
        "surename",
        "pokemon"
    );
    return {
        values,
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

// export default connect(mapStateToProps, mapDispatchToProps)(App1);

export default reduxForm({
    form: FORM_NAME
})(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App1)
);