import getButtonStyling from './getButtonStyling'

function Button({ text, onClickHandler, styleType = "primary", type="button"}) {
    
    return (
        <button 
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2  ${getButtonStyling(styleType)}  text-white border-0 rounded-sm my-2`}
        >
            {text} 
        </button>
    );
}



export default Button;