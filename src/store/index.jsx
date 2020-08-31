import React, { useReducer } from 'react';
import { authTypes, favoriteTypes } from './_types';

export const Store = React.createContext();

const initialState = {
    session: {
		isAuth: false,
		name: '',
		token: ''
	},
    favorites: []
};

const globalReducer = (state = initialState, action) => {
		
	switch (action.type) {
	case authTypes.SET_SESSION:
		return { ...state, session: action.payload };

	case authTypes.REMOVE_SESSION:
		return {...state, session: null}
	
	case favoriteTypes.ADD_FAVORITE:
		return { ...state, favorites: state.favorites.concat(action.payload) }
	
	default:
		return state;
	}
};

export function StoreProvider(props) {
	const [state, dispatch] = useReducer(globalReducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}