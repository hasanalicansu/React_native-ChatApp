import {combineReducers} from "redux";
import kimlikDogrulamaReducers from "./KimlikDogrulamaReducers";

export default combineReducers({
    kimlikdogrulamaResponse :kimlikDogrulamaReducers,
   
});