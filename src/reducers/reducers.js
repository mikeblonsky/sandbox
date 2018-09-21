import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fetchUsers } from "./users";
import { fetchPosts } from "./posts";
import { fetchComments } from "./comments";
import { fetchPhotos } from "./photos";
import { fetchPersons } from "./persons";
import { fetchReqres } from "./reqres";
import { fetchPokemon } from "./pokemon";

const rootReducer = combineReducers({
  form: formReducer,
  users: fetchUsers,
  posts: fetchPosts,
  comments: fetchComments,
  photos: fetchPhotos,
  persons: fetchPersons,
  reqres: fetchReqres,
  pokemon: fetchPokemon
});

export default rootReducer;
