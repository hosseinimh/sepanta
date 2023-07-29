import utils from "../../utils/Utils";
import * as actions from "./userTaypes";

const initialState = {
    isAuthenticated: !!utils.getLSUser(),
    user: utils.getLSUser() ?? null,
    error: null,
    loading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.FETCH_LOGIN_USER_REQUEST:
            return { ...state, loading: true };
        case actions.FETCH_AUTH_ACTION:
            return {
                ...state,
                user: payload.item,
            };
        case actions.FETCH_LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: payload.item,
                // error: "",
                loading: false,
                isAuthenticated: true,
            };
        case actions.FETCH_LOGIN_USER_FAILURE:
            return {
                ...state,
                error: payload.error,
                loading: false,
                isAuthenticated: false,
            };
        case actions.FETCH_LOGOUT_REQUEST_ACTION:
            return {
                isAuthenticated: false,
                user: null,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
