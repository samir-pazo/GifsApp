import React, { useReducer } from 'react';
import { authTypes, favoriteTypes, gifsTypes } from './_types';

export const Store = React.createContext();

const initialState = {
    session: {
		isAuth: false,
		name: '',
		token: ''
	},
	categories: ['Dragon Ball'],
    favorites: []
};

const globalReducer = (state = initialState, action) => {
 
	switch (action.type) {

	case gifsTypes.ADD_CATEGORY:
		return { ...state, categories: [ action.payload, ...state.categories ] }
	case gifsTypes.GIFS_LIST :
		return { ...state, categories: action.payload }
	case authTypes.SET_SESSION:
		return { ...state, session: action.payload };

	case authTypes.REMOVE_SESSION:
		return { ...state, session: {
			isAuth: false,
			name: '',
			token: ''
		} }
	
	case favoriteTypes.ADD_FAVORITE:
		if(state.favorites.find(fav => fav.id === action.payload.id)) {
			return state;
		}
		return { ...state, favorites: [ action.payload , ...state.favorites] }	
	default:
		return state;
	}
};

export function StoreProvider(props) {
	const [state, dispatch] = useReducer(globalReducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}