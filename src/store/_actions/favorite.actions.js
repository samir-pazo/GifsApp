
import { favoriteTypes } from '../_types';

const AddFavorite = ( favorite, dispatch ) => {
    dispatch({
        type: favoriteTypes.ADD_FAVORITE,
        payload: favorite
    })
};


export const favoriteActions = {
    AddFavorite
}