import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { favoriteActions } from '../store/_actions';
import Like from '../ui/Like';
import LikeNot from '../ui/LikeNot';
import { Store } from '../store';


const GifGrigItem = (  { id, title, imageUrl, isFavorite } ) => {
    
    const { dispatch } = useContext(Store)

    const handleAddFavorite = ( favorite ) => {

        //add soni button
        
        const sonidoClick = document.getElementById('sonidoClick');       
        sonidoClick.play();
        favoriteActions.AddFavorite( favorite, dispatch )
         
    };

    const favoriteButton = (!isFavorite) ? 
        (
            <Button variant=""  onClick={ ()=> handleAddFavorite( { id, imageUrl, title} ) }>
                <LikeNot /> 
            </Button>
        )
        :
        (
            <Button variant=""  >
                <Like /> 
            </Button>
        )

    return (
        <Card style={{ width: '18rem' }} className="card animate__animated animate__bounce">
            <Card.Img variant="top" src={ imageUrl } />
            <div className="h2 m-0">
                {
                    favoriteButton
                }  
            </div>
            <Card.Body>
                             
            <Card.Title>{ title }</Card.Title>           
            </Card.Body>
        </Card>
    )
}

GifGrigItem.propTypes = {
    isFavorite: PropTypes.bool.isRequired
}

export default GifGrigItem;

