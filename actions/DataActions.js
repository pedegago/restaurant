import ActionTypes from "./ActionTypes";

export const onChangeOrder = (products) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.CHANGE_ORDER,
            payload: products
        });
    };
};