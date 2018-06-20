import { combineReducers } from "redux";
import {fetchUsers} from "./users";

const rootReducer = combineReducers({
  users: fetchUsers
});

export default rootReducer;
