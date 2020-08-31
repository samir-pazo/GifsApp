import React, { useContext } from 'react'
 
import { Store } from '../store'
 
const FavoriteScreem = () => {

    const { state } = useContext(Store)

    console.log(state)

    return (
        <div>
            <h2>Favorite</h2>
        </div>
    )
}

 

export default FavoriteScreem
