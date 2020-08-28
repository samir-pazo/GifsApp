import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const GifGrigItem = (  { id, title, imageUrl } ) => {
    
    return (
        <Card style={{ width: '18rem' }} className="card animate__animated animate__bounce">
            <Card.Img variant="top" src={ imageUrl } />
            <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Button variant="primary">Favorito</Button>
            </Card.Body>
        </Card>
    )
}

export default GifGrigItem
