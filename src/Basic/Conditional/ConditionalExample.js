import {useState} from "react";

function ConditionalExample(){
    const[showMessage,setShowMessage]=useState(false);
    const[inputText,setInputText]=useState('');
    const[displayedText,setDisplayedText]=useState('');

    const toggleMessage=()=>{
        setShowMessage(!showMessage);
    }
    const handleInputChange=(event)=>{
        setInputText(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(inputText.trim()){
            setDisplayedText(inputText);
        }
        else{
            setDisplayedText("Pleases enter something in the input box")
        }
    }
    return(
        <div>
            <div>
                <button onClick={toggleMessage}>{showMessage?"Hide Message":"Show Message"}</button>
                {showMessage &&<p> This is toggleable message!</p>}
            </div>

            <div>
                <input type='text'
                value={inputText}
                onChange={handleInputChange}
                placeholder='type something....'/>
                <button onClick={handleSubmit}>
                    DisplayText
                </button>
                {displayedText &&<p>{displayedText}</p>}
            </div>
        </div>
    )
}
export default ConditionalExample