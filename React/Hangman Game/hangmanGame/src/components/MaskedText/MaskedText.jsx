import { useEffect, useRef } from "react";
import { getMaskedString } from "./MaskingUtility";
import DialogModal from "../DialogModal/DialogModal";

function MaskedText( {text, guessedLetters} ) {
    const maskedString = getMaskedString(text, guessedLetters);
    const dialogRef = useRef(null);

    useEffect(() => {
        let flag=true;
        for(let i=0; i<maskedString.length; i++) {
            if(maskedString[i]==="_") {
                flag=false;
                break;
            }
        }
        if(flag) {
            dialogRef.current.showModal();
        }
    }, [maskedString]);
    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}

            <DialogModal ref={dialogRef} text="Hurray, You won the game ..." styleType="success" />
        </>
    )
}

export default MaskedText;