import React from 'react'
import GifGrigItem from './GifGrigItem'
import useFetchGifs from './hooks/useFetchGifs'

const GifGrid = ( { category } ) => {

    const { data:gifs, loading} = useFetchGifs( category );

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
                        {...gif} />
                ))
            }           
            </div>
        </>
    )
}

export default GifGrid
