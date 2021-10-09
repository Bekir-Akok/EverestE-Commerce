import { combineReducers } from "redux";
import {requestReducer} from './requestReducer';
import {basketReducer} from './basketReducer';
  
 const rootReducer = combineReducers({
    requestReducer ,
    basketReducer
})

export default rootReducer