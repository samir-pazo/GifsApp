import React, { useState, useContext } from 'react'
 
import { gifsActions } from '../store/_actions';
import { Store } from '../store';

const AddCategory = () => {

    const { dispatch } = useContext(Store);
    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = (e) => {

        setInputValue( e.target.value );

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){      
            gifsActions.addCategory( inputValue, dispatch );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>                   
            <input 
                onChange={ handleInputChange }
                placeholder="Ejemplo: Goku"
                type="text" 
                value={ inputValue }
            />
        </form>
    )
}
 

export default AddCategory
