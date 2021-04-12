import Card from '../card/Card'

import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <div className="banner">
                <div className="banner__title">Get Matched With Your New Best Friend</div>
                <button className="banner__btn">Find A Pet</button>
            </div>
            <div className="pet-display">
                <div className="pet-display__title">Pets Looking For A New Home</div>
                <div className="pet-display__cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Homepage
