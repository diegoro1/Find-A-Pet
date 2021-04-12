import defaultImage from '../../assets/dog4.jpg'
import './Card.css'

const Card = ({ image, name }) => {
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
