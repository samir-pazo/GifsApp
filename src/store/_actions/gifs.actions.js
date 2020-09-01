
import { gifsTypes } from '../_types';

const addCategory = (category, dispatch) =>{

    dispatch({
        type: gifsTypes.ADD_CATEGORY,
        payload: category
    })
} 
 
export const gifsActions = {
    addCategory
}