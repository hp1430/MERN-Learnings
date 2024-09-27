import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";

function PlayGameComponent({ wordSelected, guessedLetters, step, onLetterClick }) {
    return (
        <>
            <h1>Play Game</h1>

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
