import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { 
  fetchPokemon,
  fetchUsers,
  fetchPosts,
  fetchComments,
  fetchPhotos,
  fetchPersons,
  fetchReqres,
  xxx
} from "./api";
// import {
//   xxx
// } from "./register_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  users: fetchUsers,
  posts: fetchPosts,
  comments: fetchComments,
  photos: fetchPhotos,
  persons: fetchPersons,
  reqres: fetchReqres,
  pokemon: fetchPokemon,
  sports: xxx
});

export default rootReducer;
