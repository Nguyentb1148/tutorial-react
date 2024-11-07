import {useState} from "react";

function CommonEvents(){

    const [clickText,setClickText]= useState("Click on button");
    const [inputValue,setInputValue]= useState("");
    const [submitMessage, setSubmitMessage]= useState("");
    const [keyPressMessage,setKeyPressMessage]= useState("");
    //event handlers
    const handleClick =()=>{
        setClickText("Button clicked!")
    }
    const handleChange= (event)=>{
        setInputValue(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();//prevent page refresh on form submit
        setSubmitMessage(`Form submitted with: ${inputValue}`)
    }
    const handleKeyPress=(event)=>{
        setKeyPressMessage(`you presses: ${event.key}`)
    }
    return(
        <div>
            <h2> Common events example</h2>
            {/* onClick Event*/}
            <div>
                <p>{clickText}</p>
                <button onClick={handleClick}>Click me</button>
            </div>
            {/* onChange Event*/}
            <div>
                <p> Input: {inputValue}</p>
                < input type="text"
                        onChange={handleChange}
                        placeholder="type something here"
                />
            </div>
            {/* onSubmit Event*/}
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Submit Form</button>
                </form>
                <p>{submitMessage}</p>
            </div>
            {/* onKeyPress Event*/}
            <input
                type="text"
                onKeyDown={handleKeyPress}
                placeholder="Press a key here"
            />
            <p>{keyPressMessage}</p>
        </div>
    )
}
export default  CommonEvents;