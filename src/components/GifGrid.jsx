import React, { useContext } from 'react'
import GifGrigItem from './GifGrigItem'
import useFetchGifs from './hooks/useFetchGifs'
import { Store } from '../store';

const GifGrid = ( { category } ) => {

    const { data:gifs, loading} = useFetchGifs( category );

    const { state:{favorites} } = useContext(Store)

    return (
        <>
            <h3>{ category }</h3>  
            {
                loading && 'cargando...'
            }  
            <div className="card-grid">
            {
                gifs.map(( gif ) => (
                    <GifGrigItem 
                        key={gif.id} 
                        {...gif} 
                        isFavorite={((!!favorites.find(fav => fav.id === gif.id)) && true)}/>
                 ))
            }           
            </div>
        </>
    )
}

export default GifGrid
