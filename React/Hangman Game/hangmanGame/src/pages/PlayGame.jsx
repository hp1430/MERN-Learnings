import { useState } from "react";
import { useLocation } from "react-router-dom";
import PlayGameComponent from "./PlayGameComponent";

function PlayGame() {
    const { state } = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (state?.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <PlayGameComponent 
            wordSelected={state?.wordSelected}
            hint={state?.hint}
            guessedLetters={guessedLetters}
            step={step}
            onLetterClick={handleLetterClick}
        />
    );
}

export default PlayGame;
