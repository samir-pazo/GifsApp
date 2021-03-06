import { authTypes } from "../_types";

const login = ( user, dispatch ) => {

    localStorage.setItem('session_app', JSON.stringify(user));

    dispatch({
        type: authTypes.SET_SESSION,
        payload : user
    })

};

const logout = (dispatch) => {
    localStorage.removeItem('session_app');
    dispatch({
        type: authTypes.REMOVE_SESSION
    })
}

export const authActions = {
    login,
    logout
};