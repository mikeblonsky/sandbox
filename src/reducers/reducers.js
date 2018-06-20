import { combineReducers } from "redux";
import { fetchUsers } from "./users";
import { fetchPosts } from "./posts";
import { fetchComments } from "./comments";

const rootReducer = combineReducers({
  users: fetchUsers,
  posts: fetchPosts,
  comments: fetchComments
});

export default rootReducer;
