import {useState} from "react";

function ClickButtonfunction(){
    const [text,setText]=useState("Click the button");

    const handleClick=()=>{
        setText("button clicked");
    }
    return(
        <div>
            <p>{text}</p>
            <button onClick={handleClick}> click Me</button>
        </div>
    )
    };
export default ClickButtonfunction;