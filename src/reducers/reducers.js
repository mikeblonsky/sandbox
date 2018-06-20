import { combineReducers } from "redux";
import { fetchUsers } from "./users";
import { fetchPosts } from "./posts";

const rootReducer = combineReducers({
  users: fetchUsers,
  posts: fetchPosts
});

export default rootReducer;
