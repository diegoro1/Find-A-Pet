import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../App'
import Card from '../card/Card'

import quizArt from '../../assets/quiz.svg'
import './Homepage.css'

const Homepage = () => {
    const [petList, setPetList] = useState(null);
    const accessToken = useContext(AuthContext);

    useEffect(() => {
        if (accessToken === null){
            console.log("EFFECT!");
            return;
        }
        const fetchRandPets = async () => {
            const randPets = await fetch(
                "https://api.petfinder.com/v2/animals",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }, 
                }
            );
            const pets = await randPets.json();
            setPetList(pets.animals);
        };
        fetchRandPets();
    }, [accessToken]);

    return (
        <>
            <div className="banner">
                <div className="banner__title">Get Matched With Your New Best Friend</div>
                <button className="banner__btn">Find A Pet</button>
            </div>
            <div className="pet-display">
                <div className="pet-display__title">Pets Looking For A New Home</div>
                <div className="pet-display__cards">
                    {console.log(petList)}
                    {petList ?  <Card pet={petList[0]} /> : console.log("Nothing!")}
                    {petList ?  <Card pet={petList[1]} /> : console.log("Nothing!")}
                    {petList ?  <Card pet={petList[2]} /> : console.log("Nothing!")}
                    {petList ?  <Card pet={petList[3]} /> : console.log("Nothing!")}
                    {petList ?  <Card pet={petList[4]} /> : console.log("Nothing!")}
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
