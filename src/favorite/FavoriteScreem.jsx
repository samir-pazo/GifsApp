import React, { useContext } from 'react';
import FavoriteItem from './FavoriteItem';

import { Store } from '../store';
import { Link } from 'react-router-dom';
 
const FavoriteScreem = () => {

    const { state:{favorites} } = useContext(Store)
 
    return (
        <div>
            <h2>Favorites</h2>
            <div className="card-grid">
            {
                (favorites.length === 0) ? (
                    <div className="text-center">
                        <div className="alert alert-info">Aun no tienes favoritos </div>
                        <Link to="/"  >ver Gifs</Link>
                    </div>
                ) 
                : 
                (
                    favorites.map(fav => (
                        <FavoriteItem 
                            key={fav.id} 
                            {...fav} />
                    ))
                )
            }
            </div>
        </div>
    )
}

 

export default FavoriteScreem
