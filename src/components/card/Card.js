import React, { useState, useEffect } from 'react'
import defaultImage from '../../assets/dog4.jpg'

import './Card.css'

const Card = ({ pet }) => {
    const [image, setImage] = useState(undefined);
    const [name, setName] = useState(undefined);

    useEffect(() => {
        if (pet === undefined)
            return;
        validateName(pet);
        validatePicture(pet);
    }, [])


    const validateName = (pet) => {
        if (pet === undefined || pet.name === undefined)
            return;

            console.log("pet name:" + pet.name);
        
            setName(pet.name);
    }

    const validatePicture = (pet) => {
        if (pet === undefined)
            return;
        
        // tries to get a primary photo, sets a regular photo otherwise 
        // (if there is another photo)
        if (pet.primary_photo_cropped === null) {
            if (pet.photos.length !== 0) {
                // sets the first picture from object
                setImage(pet.photos[Object.keys(pet.photos)[0]]);
            }

            return; 
        }

        // tries to return the full cropped primary photo, else sets the first
        // photo in object
        if (pet.primary_photo_cropped.full !== undefined) {
            setImage(pet.primary_photo_cropped.full);
        }
        else {
            setImage(pet.primary_photo_cropped[Object.keys(pet.primary_photo_cropped)[0]]);
        }
    }

    return (
        <div className="card">
            <div className="card__image" style={
                image ? {backgroundImage: `url(${image})`} : {backgroundImage: `url(${defaultImage})`}
            }>
            </div>
            <div className="card__description">
                <p>{name ? name : "Dog"}</p>
            </div>
        </div>
    )
}

export default Card
