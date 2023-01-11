import { legacy_createStore } from "redux";
import { RootReducer } from "./Reducer/Index";


export const store = legacy_createStore(
    RootReducer
)

