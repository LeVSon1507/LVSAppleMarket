export const showPopup = (props) => {
    return {
        type: "SHOW_POPUP",
        payload: props
    };
};
export const hidePopup = () => {
    return {
        type: "HIDE_POPUP",
    };
};