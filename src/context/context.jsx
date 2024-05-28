import { createContext, useState } from "react";

export const myContext = createContext();

export default function ContextProvider ({children}) {
    const [isPaused, setToPaused] = useState('Homepage');
    //we will give people 10 chances, if they get the wrong answer 10 times, they lose
    const instructions = [
        {
            divNo: '01',
            instructionTitle: 'CHOOSE A CATEGORY',
            instruction: 'First, choose a category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.'
        },
        {
            divNo: '02',
            instructionTitle: 'GUESS LETTERS',
            instruction: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.'
        },
        {
            divNo: '03',
            instructionTitle: 'WIN OR LOSE',
            instruction: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.'
        }
    ];

    return(
        <myContext.Provider value={{
            isPaused,
            setToPaused,
            instructions, 
        }} >
            {children}
        </myContext.Provider>

    )
}