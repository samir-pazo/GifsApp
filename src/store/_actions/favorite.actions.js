
import { favoriteTypes } from '../_types';

const AddFavorite = ( favorite, dispatch ) => {

    //agregamos al API
    

    dispatch({
        type: favoriteTypes.ADD_FAVORITE,
        payload: favorite
    })
};


export const favoriteActions = {
    AddFavorite
}