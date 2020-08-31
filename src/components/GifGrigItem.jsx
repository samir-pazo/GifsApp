import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Store } from '../store';

import { favoriteActions } from '../store/_actions';


const GifGrigItem = (  { id, title, imageUrl } ) => {
    
    const { dispatch } = useContext(Store)

    const handleAddFavorite = ( favorite ) => {
        favoriteActions.AddFavorite( favorite, dispatch )
    };

    return (
        <Card style={{ width: '18rem' }} className="card animate__animated animate__bounce">
            <Card.Img variant="top" src={ imageUrl } />
            <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Button variant="primary" onClick={ ()=> handleAddFavorite( { id, title, imageUrl} ) }>Favorito</Button>
            </Card.Body>
        </Card>
    )
}

export default GifGrigItem;
