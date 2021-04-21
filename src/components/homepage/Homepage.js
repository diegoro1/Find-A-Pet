import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../App'
import Card from '../card/Card'

import quizArt from '../../assets/quiz.svg'
import './Homepage.css'

const Homepage = () => {
    const [petList, setPetList] = useState(null);
    const accessToken = useContext(AuthContext);

    useEffect(() => {
        if (accessToken === null)
            return;
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
            console.log(pets);
            console.log(pets.animals[0].name);
            setPetList(pets.animals);
            console.log(petList[0].name);
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
                    <Card name={petList[0].name} image={petList[0].primary_photo_cropped.full}/>
                    <Card name={petList[1].name} image={petList[1].primary_photo_cropped.full}/>
                    <Card name={petList[2].name} image={petList[2].primary_photo_cropped.full}/>
                    <Card name={petList[3].name} image={petList[3].primary_photo_cropped.full}/>
                    <Card name={petList[4].name} image={petList[4].primary_photo_cropped.full}/>
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
