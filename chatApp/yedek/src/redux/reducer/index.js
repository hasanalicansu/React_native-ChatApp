import {combineReducers} from "redux";
import kimlikDogrulamaReducers from "./KimlikDogrulamaReducers";
import userListReducer from "./UserListReducer";
import messageReducer from "./MessageReducer";
import userUpdateReducers from "./UserUpdateReducer";

export default combineReducers({
    kimlikdogrulamaResponse :kimlikDogrulamaReducers,
    userListResponse :userListReducer,
    messageResponse :messageReducer,
    userUpdateResponse :userUpdateReducers,
});