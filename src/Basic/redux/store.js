import {createStore} from "redux";
import {counterReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

const store= configureStore({
    reducer:counterReducer
})
export default store