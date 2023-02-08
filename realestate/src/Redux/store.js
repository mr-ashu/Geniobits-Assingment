import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"

import thunk from "redux-thunk"
import { authReducer } from "./Auth.reducer"
import { dataReducer } from "./Data.reducer"
 
 
const rootReducer = combineReducers({
    auth:authReducer,
    data: dataReducer

})
 
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))