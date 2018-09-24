import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { 
  fetchPokemon,
  fetchUsers,
  fetchPosts,
  fetchComments,
  fetchPhotos,
  fetchPersons,
  fetchReqres
} from "./api";

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
