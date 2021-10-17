import { combineReducers } from "redux";
import { requestReducer } from './requestReducer';
import { basketReducer } from './basketReducer';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    requestReducer,
    basketReducer,
    userReducer,
    orderReducer
})

export default rootReducer