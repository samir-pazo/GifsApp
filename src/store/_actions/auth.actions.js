import { authTypes } from "../_types";

const login = ( user, dispatch ) => {

    localStorage.setItem('session_app', JSON.stringify(user));

    dispatch({
        type: authTypes.SET_SESSION,
        payload : user
    })

};

export const authActions = {
    login
};