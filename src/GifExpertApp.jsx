import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball']);
 
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={ setCategories }/>
            <hr/>
            <ul>
                {
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ) )
                }
            </ul>
        </div>
    )
}

export default GifExpertApp