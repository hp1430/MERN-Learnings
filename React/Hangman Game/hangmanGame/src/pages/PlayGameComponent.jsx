import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

function PlayGameComponent({ wordSelected, guessedLetters, step, onLetterClick, hint }) {
    return (
        <>
            <h1 className="text-2xl font-bold">Play Game</h1>

            <h1 className="text-2xl">Hint: {hint}</h1>

            <MaskedText text={wordSelected} guessedLetters={guessedLetters} />

            <div>
                <LetterButtons text={wordSelected} guessedLetters={guessedLetters} onLetterClick={onLetterClick} />
            </div>

            <div>
                <HangMan step={step} />
            </div>

            <Link to='/start' className="text-blue-400">Start Game Link</Link>
        </>
    );
}

export default PlayGameComponent;
