import { combineReducers, legacy_createStore } from "redux";
import { user } from "./reducer/user";
import { follow } from "./reducer/followUser";


const reducer = combineReducers({
    user,
    follow,
})

export const store = legacy_createStore(reducer)