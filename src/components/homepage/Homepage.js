import Card from '../card/Card'

import quizArt from '../../assets/quiz.svg'
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
            <div className="quiz-display">
                <div className="quiz-display__title">Find The Breed That Fits Your Lifestyle</div>
                <div className="quiz-display__art-btn-wrapper">
                    <img src={quizArt} className="quiz-display__art"/>
                    <button className="quiz-display__btn">Take The Quiz</button>
                </div>
            </div>
        </>
    )
}

export default Homepage
