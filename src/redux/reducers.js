import { combineReducers } from "redux";

const user = (state = null) => state;

const businesses = (state = []) => state;

export default combineReducers({ user, businesses });