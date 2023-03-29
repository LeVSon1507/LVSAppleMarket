import { showPopup, hidePopup } from '../action/action'

const initialState = {
    product: {},
    isShowPopup: false,
}

// REDUCER
export const showPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_POPUP":
            return ({
                ...state,
                isShowPopup: true,
                product: action.payload
            });
        case "HIDE_POPUP":
            return ({
                ...state,
                isShowPopup: false,
                product: {}
            });
        default: return state;
    }
}
