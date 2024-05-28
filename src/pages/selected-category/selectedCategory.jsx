// import burger pause button
import HealthBar from "../../components/healthbar";
import { useParams } from "react-router-dom";
import '../../scss/pages/_selectedcategories.scss'
import BurgerButton from "../../components/burgerbutton";
import * as data from '../../JSON/data.json';
import { useState } from "react";

// clear this page up after, put most things in the context file

export default function SelectedCategory () {

    const {id} = useParams();
    const [health, setHealth] = useState(100);
    const [words, setWords] = useState(data.categories[id]);

    console.log(data.categories[id].length)

    let randomWordGenerator = () => {
        let rand = Math.floor(Math.random() * data.categories[id].length);
        return words[rand].name.split(' ');
    }

    const alphabet = [  
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
        ];

    return(
        <main className="game-page">
            <header>
                <div>
                    <BurgerButton />
                    <h3>{id}</h3>
                </div>

                <HealthBar />
            </header>
                
{/* this is going to be the section where the boxes we are meant to fill out will be */}
            <section className="hidden-word__section">
                {
                    randomWordGenerator().map((word, index) => {

                        return(
                            <div className="word__div">
                                {word.split('').map((letter, letterIndex) => {
                                    return (
                                        <div key={index} className="hidden-card__wrapper">
                                        <div key={letterIndex} className="card__hidden">
                                            <h3>{letter}</h3>
                                        </div>
                                        </div>
                                    )
                                }) }
                            </div>
                        )
                        
                    })
                }
                {/* we will loop how many letters are in the string excluding any space */}
                {/* how will we have two words be on different rows? */}
            </section>

            <section className="keypad_section">
                {
                    alphabet.map((letter, index) => {

                        return(
                            <div>
                                <h6>{letter}</h6>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}