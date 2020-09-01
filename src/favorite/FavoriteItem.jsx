import React from 'react'
import Card from 'react-bootstrap/Card'
 
const FavoriteItem = ({ id, title, imageUrl }) => {
    //const { dispatch } = useContext(Store)

     

    return (
        <Card style={{ width: '18rem' }} className="card animate__animated animate__bounce">
            <Card.Img variant="top" src={ imageUrl } />
            <Card.Body>
            <Card.Title>{ title }</Card.Title>
             
            </Card.Body>
        </Card>
    )
}

export default FavoriteItem
