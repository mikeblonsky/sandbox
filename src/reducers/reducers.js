import { combineReducers } from "redux";
import { fetchUsers } from "./users";
import { fetchPosts } from "./posts";
import { fetchComments } from "./comments";
import { fetchPhotos } from "./photos";

const rootReducer = combineReducers({
  users: fetchUsers,
  posts: fetchPosts,
  comments: fetchComments,
  photos: fetchPhotos
});

export default rootReducer;
