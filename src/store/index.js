import {applyMiddleware, legacy_createStore} from "redux";
import {catReducer} from "./catReducer";
import thunk from "redux-thunk";


export const store = legacy_createStore(catReducer, applyMiddleware(thunk))