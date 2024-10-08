import Button from "../button/button";
import TextInput from "../TextInput/TextInput";

function TextInputform({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick, handleHintInputChange }) {

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or a phrase here..."
                    onChangeHandler={handleTextInputChange}

                />
            </div>

            <div>
                <Button 
                    styleType="warning"
                    text={inputType==="password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <TextInput 
                    label="Enter Hint"
                    placeholder="Enter Hint here..."
                    onChangeHandler={handleHintInputChange}
                />
            </div>

            <div>
                <Button 
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
}

export default TextInputform;