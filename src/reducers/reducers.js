import { combineReducers } from "redux";
import { fetchUsers } from "./users";
import { fetchPosts } from "./posts";
import { fetchComments } from "./comments";
import { fetchPhotos } from "./photos";
import { fetchPersons } from "./persons";
import { fetchReqres } from "./reqres";
import { fetchPokemon } from "./pokemon";

const rootReducer = combineReducers({
  users: fetchUsers,
  posts: fetchPosts,
  comments: fetchComments,
  photos: fetchPhotos,
  persons: fetchPersons,
  reqres: fetchReqres,
  pokemon: fetchPokemon
});

export default rootReducer;
