import { useContext, useState } from "react";
import { myContext } from "../../context/context";
import BackButton from "../../components/backbutton";
import '../../scss/pages/_guidepage.scss';
import '../../scss/components/_back-button.scss';
import { Link } from "react-router-dom";

export default function HowToPlayPage () {

    const {instructions} = useContext(myContext);    

    return(
        <main className="how-to-page">
            
            <header>
                <div className="backbutton__div">
                    <Link to='/'>
                        <BackButton />
                    </Link>
                </div>
                <h1 className="how-to__title">
                    How To Play
                </h1>
            </header>

            <div className="instructions__div">
               {
                instructions.map((div, index) => {

                    return(
                        <div className="how-to-div" key={index}>
                            <h2>{div.divNo}</h2>
                            <h3>{div.instructionTitle}</h3>
                            <p>{div.instruction}</p>
                        </div>
                    )
                })
               }
            </div>
        </main>
    )
}