import React, { useState, useContext } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { Store } from './store';

const GifExpertApp = () => {

    const { state:{categories} } = useContext(Store);
 
    return (
        <div className="pt-5">
             
            <AddCategory />
            <hr/>
            <div>
                {
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    ) )
                }
            </div>
        </div>
    )
}

export default GifExpertApp