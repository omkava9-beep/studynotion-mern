import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import profileReducer from "./slices/profileReducer";
import cartReducer from "./slices/cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart:cartReducer
})

export default rootReducer