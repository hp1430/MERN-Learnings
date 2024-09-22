import { useState } from "react";
import TextInputform from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted");
        if(value) {
            // if we have something valid in value then go to play page
            navigate("/play", { state: { wordSelected: value } });
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        if(inputType==="password") {
            setInputType("text");
        }
        else {
            setInputType("password");
        }
        console.log(inputType);
    }

    return (<TextInputform 
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />)
}

export default TextInputFormContainer
