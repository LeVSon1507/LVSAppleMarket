import { combineReducers } from "redux";

import { showPopupReducer } from "./reducer";

export const allReducers = combineReducers({
    showPopupReducer,
    // add more reducers here
});