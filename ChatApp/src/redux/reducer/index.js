import {combineReducers} from "redux";
import kimlikDogrulamaReducers from "./KimlikDogrulamaReducers";
import userListReducer from "./UserListReducer"
import messageReducer from "./MessageReducer"

export default combineReducers({
    kimlikdogrulamaResponse :kimlikDogrulamaReducers,
    userListResponse :userListReducer,
    messageResponse :messageReducer,
});