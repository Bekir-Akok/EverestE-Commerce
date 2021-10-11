import { combineReducers } from "redux";
import {requestReducer} from './requestReducer';
import {basketReducer} from './basketReducer';
import {userReducer} from './userReducer';
  
 const rootReducer = combineReducers({
    requestReducer ,
    basketReducer , 
    userReducer
})

export default rootReducer